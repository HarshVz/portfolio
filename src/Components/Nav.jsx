import React, { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Twitter } from '../assets/index'

const Nav = ({classList}) => {

    const [name, setName] = useState("Harsh Darji")

    const handleMouseEnter = () => {
        setName("Available On")
    }

    const handleMouseLeave = () => {
        setName("Harsh Darji")
    }

  return (
    <nav className={`item-center mb-8 flex w-full justify-between hover:opacity-70 ${classList}`}
    onMouseEnter={() => handleMouseEnter()}
    onMouseLeave={() => handleMouseLeave()}
    >
        <div
        className="flex flex-row items-center justify-center gap-2 text-xl transition duration-300 ease-in transition-discrete cursor-alias"
        >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-900">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            {name}
        </div>
            <div className="flex justify-center items-center gap-5 text-neutral-500">
                <a href="https://github.com/HarshVz" className="hover:text-neutral-200 transition duration-300 ease-linear" target="_blank">
                    <Github />
                </a>
                <a href="https://www.linkedin.com/in/harshdarji26/" className="hover:text-neutral-200 transition duration-300 ease-linear" target="_blank">
                    <Linkedin />
                </a>
                <a href="mailto:harsh.visualz@gmail.com" className="hover:text-neutral-200 transition duration-300 ease-linear" target="_blank">
                    <Mail />
                </a>
                <a href="https://x.com/harshdev_" className="hover:text-neutral-200 transition duration-300 ease-linear" target="_blank">
                    <Twitter />
                </a>
            </div>
  </nav>
  )
}

export default Nav
