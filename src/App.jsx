import React, { useEffect } from 'react'
import { useState } from 'react'
import { Github, Linkedin, Mail, Twitter } from './assets/index'
import { Nav, AboutSection, Skills, ProjectSection, Showcase, Modal } from './Components'

const App = () => {
    const [classList, setClassList] = useState("")
    const [classList2, setClassList2] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [project, setProject] = useState()

    const handleModal = (isOpen) => {
        console.log(isOpen)
        setIsOpen(!isOpen)
    }

    const setProjectData = (project) => {
        setProject(project);
    }

    const openModal =(project) => {
        setIsOpen(true)
        setProject(project)
    }

    const closeModal =() => {
        setIsOpen(false)
    }

    const transition = "transition transition-all ease-out duration-300"

    useEffect(() => {
        setClassList(`${transition} blur-md`)
        setClassList2(`${transition} blur-lg`)
        setTimeout(() => {
            setClassList(`${transition} blur-xs`)
            setClassList2(`${transition} blur-sm`)
        }, 300)
        setTimeout(() => {
            setClassList(`${transition}`)
            setClassList2(`${transition} blur-xs`)
        }, 500)
        setTimeout(() => {
            setClassList2(`${transition}`)
        }, 800)
    }, [])

  return (
    <div className="transition duration-300 mx-auto min-h-screen max-w-4xl bg-neutral-900 px-5 py-8 text-white">
        <Modal
            isOpen={isOpen}
            closeModal= {closeModal}
            selectedProject = {project}
        />
        <Nav classList={classList}/>
        <AboutSection classList={classList}/>
        <ProjectSection classList2={classList2} isOpen={isOpen}
            openModal= {openModal}/>
        <Skills classList2={classList2}/>
    </div>
  )
}

export default App
