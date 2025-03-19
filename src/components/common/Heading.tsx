import React from 'react'

function Heading({customHeading, headingClass}:any) {
  return (
    <h2 className={`text-black font-bold text-5xl max-sm:text-4xl font-integral uppercase ${headingClass}`}>{customHeading}</h2>
  )
}

export default Heading