import React from 'react'

interface LogoTextProps {
  className?: String
}

const LogoText = ({ className }: LogoTextProps) => {
  return (
    <div className={`font-STIX font-bold ${className} leading-[52px] text-brand-black`}>ARTEMYS.</div>
  )
}

export default LogoText