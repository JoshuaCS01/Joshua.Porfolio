import Image from "next/image";

export default function Home() {
  return (
<main className="flex min-h-screen w-full max-w-3xl flex-col justify-center px-16 bg-white dark:bg-black-100">
  <div>
    <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white">
      Joshua Cherenfant
    </h1>
    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
      Computer Science Student | Software Developer
    </p>
  </div>
</main>
  );
}
