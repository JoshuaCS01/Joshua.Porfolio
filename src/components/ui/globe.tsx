"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  Color,
  Fog,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
} from "three";
import ThreeGlobe from "three-globe";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera as ResponsivePerspectiveCamera,
} from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import countries from "@/data/globe.json";

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

type GlobePoint = {
  size: number;
  order: number;
  color: string;
  lat: number;
  lng: number;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
  active?: boolean;
}

export function Globe({
  globeConfig,
  data,
  active = true,
}: WorldProps) {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const invalidate = useThree((state) => state.invalidate);
  const globe = useMemo(() => new ThreeGlobe(), []);
  const settings = useMemo(
    () => ({
      pointSize: globeConfig.pointSize ?? 1,
      atmosphereColor: globeConfig.atmosphereColor ?? "#ffffff",
      showAtmosphere: globeConfig.showAtmosphere ?? true,
      atmosphereAltitude: globeConfig.atmosphereAltitude ?? 0.1,
      polygonColor:
        globeConfig.polygonColor ?? "rgba(255,255,255,0.7)",
      globeColor: globeConfig.globeColor ?? "#1d072e",
      emissive: globeConfig.emissive ?? "#000000",
      emissiveIntensity: globeConfig.emissiveIntensity ?? 0.1,
      shininess: globeConfig.shininess ?? 0.9,
      arcTime: globeConfig.arcTime ?? 2000,
      arcLength: globeConfig.arcLength ?? 0.9,
      rings: globeConfig.rings ?? 1,
      maxRings: globeConfig.maxRings ?? 3,
    }),
    [globeConfig],
  );

  useEffect(() => {
    const material = globe.globeMaterial() as MeshPhongMaterial;
    material.color = new Color(settings.globeColor);
    material.emissive = new Color(settings.emissive);
    material.emissiveIntensity = settings.emissiveIntensity;
    material.shininess = settings.shininess;
    invalidate();
  }, [globe, invalidate, settings]);

  useEffect(() => {
    const points: GlobePoint[] = data.flatMap((arc) => [
      {
        size: settings.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.startLat,
        lng: arc.startLng,
      },
      {
        size: settings.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.endLat,
        lng: arc.endLng,
      },
    ]);

    const filteredPoints = points.filter(
      (point, index, allPoints) =>
        allPoints.findIndex(
          (candidate) =>
            candidate.lat === point.lat && candidate.lng === point.lng,
        ) === index,
    );

    globe
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(settings.showAtmosphere)
      .atmosphereColor(settings.atmosphereColor)
      .atmosphereAltitude(settings.atmosphereAltitude)
      .hexPolygonColor(() => settings.polygonColor);

    globe
      .arcsData(data)
      .arcStartLat((item: object) => (item as Position).startLat)
      .arcStartLng((item: object) => (item as Position).startLng)
      .arcEndLat((item: object) => (item as Position).endLat)
      .arcEndLng((item: object) => (item as Position).endLng)
      .arcColor((item: object) => (item as Position).color)
      .arcAltitude((item: object) => (item as Position).arcAlt)
      .arcStroke(
        (item: object) => [0.32, 0.28, 0.3][(item as Position).order % 3],
      )
      .arcDashLength(settings.arcLength)
      .arcDashInitialGap((item: object) => (item as Position).order)
      .arcDashGap(15)
      .arcDashAnimateTime(() => settings.arcTime);

    globe
      .pointsData(filteredPoints)
      .pointColor((item: object) => (item as GlobePoint).color)
      .pointsMerge(true)
      .pointAltitude(0)
      .pointRadius(2);

    globe
      .ringsData([])
      .ringColor(() => settings.polygonColor)
      .ringMaxRadius(settings.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (settings.arcTime * settings.arcLength) / settings.rings,
      );
    invalidate();
  }, [data, globe, invalidate, settings]);

  useEffect(() => {
    globe.ringsData([]);
    invalidate();
    if (!active || shouldReduceMotion || data.length === 0) return;

    let offset = 0;
    const updateRings = () => {
      const ringCount = Math.floor((data.length * 4) / 5);
      const selectedIndices = new Set(
        Array.from(
          { length: ringCount },
          (_, index) => (index + offset) % data.length,
        ),
      );

      globe.ringsData(
        data
          .filter((_, index) => selectedIndices.has(index))
          .map((arc) => ({
            lat: arc.startLat,
            lng: arc.startLng,
            color: arc.color,
          })),
      );
      offset = (offset + 3) % data.length;
      invalidate();
    };

    updateRings();
    const interval = window.setInterval(updateRings, 2000);

    return () => {
      window.clearInterval(interval);
      globe.ringsData([]);
    };
  }, [active, data, globe, invalidate, shouldReduceMotion]);

  return <primitive object={globe} />;
}

export function WebGLRendererConfig() {
  const { gl, invalidate, size } = useThree();

  useEffect(() => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    gl.setPixelRatio(pixelRatio);
    gl.setSize(size.width, size.height, false);
    gl.setClearColor(0x000000, 0);

    invalidate();
  }, [gl, invalidate, size.height, size.width]);

  return null;
}

function ResponsiveCamera() {
  const cameraRef = useRef<PerspectiveCamera>(null);
  const { invalidate, size } = useThree();

  useEffect(() => {
    const activeCamera = cameraRef.current;
    if (!activeCamera || size.height === 0) return;

    activeCamera.aspect = size.width / size.height;
    activeCamera.updateProjectionMatrix();
    invalidate();
  }, [invalidate, size.height, size.width]);

  return (
    <ResponsivePerspectiveCamera
      ref={cameraRef}
      makeDefault
      manual
      fov={50}
      near={0.1}
      far={1800}
      position={[0, 0, cameraZ]}
    />
  );
}

export function World({
  globeConfig,
  data,
  active = true,
}: WorldProps) {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const scene = useMemo(() => {
    const nextScene = new Scene();
    nextScene.fog = new Fog(0xffffff, 400, 2000);
    return nextScene;
  }, []);
  const animate = active && !shouldReduceMotion;

  return (
    <Canvas
      className="h-full w-full"
      scene={scene}
      dpr={[1, 2]}
      frameloop={animate ? "always" : "demand"}
    >
      <ResponsiveCamera />
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe globeConfig={globeConfig} data={data} active={active} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={!shouldReduceMotion}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={globeConfig.autoRotateSpeed ?? 0.5}
        autoRotate={animate && globeConfig.autoRotate !== false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}
