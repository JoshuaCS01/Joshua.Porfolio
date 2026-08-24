import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}:{
    title: string, icon: React.ReactNode, position : string, handleClick?: () => void; otherClasses?: string;
}) => {
  return (
<button onClick={handleClick} className="relative inline-flex h-12 w-full max-w-80 overflow-hidden rounded-lg p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] " />
  <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-custom-gray px-5 text-[clamp(1rem,3vw,1.25rem)] font-medium text-white backdrop-blur-3xl ${otherClasses ?? ""}`}>
    {position === 'left' && icon}
    {title}
    {position === 'right' && icon}
  </span>
</button>
  )
}

export default MagicButton
