export const gridItems = [
  { 
    title: "Introducing Joshua Cherenfant", 
    description: "Software Developer", 
    id: 1, 
    // row-span-4 → row-span-3, and drop min-h-[60vh] — let the grid decide height
    className: "1440p:col-span-1 1440p:row-span-4     1080p:col-span-1 1080p:row-span-3", 
    imgClassName: "w-full h-full", titleClassName: "justify-end", 
    img: "/images/temptest.jpg", spareImg: ""
  },
  { 
    title: "About Me", 
    description: "", 
    id: 2, 
    // row-span-3 → row-span-2
    className: " 1440p:col-span-2  1440p:row-span-3     1080p:col-span-2 1080p:row-span-2", 
    imgClassName: "", titleClassName: "justify-start", 
    img: "", spareImg: ""
  },
  { 
    title: "Awesome Globe", 
    description: "I just thought this looked cool.", 
    id: 4, 
    className: " 1440p:col-span-2  1440p:row-span-1          1080p:col-span-2 1080p:row-span-1", 
    imgClassName: "", titleClassName: "justify-start", 
    img: "", spareImg: ""
  },
];
