import React from 'react'

const AboutSection = ({classList}) => {
  return (
    <ul className={`list-disc px-5 text-neutral-400 flex flex-col w-full gap-2 capitalize md:gap-1 ${classList}`}>
        <li>A Student Learning Full-Stack Development, from India</li>
        <li>Building <a href="https://toolsbook.vercel.app/" className="text-neutral-200 transition duration-300 hover:text-yellow-400 underline">Toolsbook!</a> (Store & Find Bookmark With Screenshot & Metadata)</li>
        <li>Worked with various organizations as a graphic designer</li>
        <li>Reach Out if you want to find a way to work together!</li>
    </ul>
  )
}

export default AboutSection
