import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProjectSection = ({ classList2, isOpen, openModal }) => {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [enableImage, setEnableImage] = useState(null)
    const [loader, setLoader] = useState(false);
    const [projects_info, setProjectInfo] = useState(localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : []);

    const getProjects = async () => {
        const response = await axios.get(`https://script.google.com/macros/s/AKfycby1m-r4yOZW8fHsJ1ThQgkbLAvourd_NN0fUtP9_bvE_2H4Hwn0q5NZQCwwhGH5IMnO/exec`);
        if (response.status === 200) {
            // console.log(response.data);
            setProjectInfo(response.data);
            localStorage.setItem('projects', JSON.stringify(response.data));
        }
    }

    useEffect(() => {
        setLoader(false);
        getProjects();
        setLoader(true);
    }, [])

    const static_projects = [
        {
            "title": "Bookmark Manager",
            "description": "A web app that allows users to save links, scrape metadata, search resources, and generate screenshots.",
            "image": "https://i.imgur.com/Yvvdxtw.png",
            "url": "https://toolsbook.vercel.app/",
            "status": "uploaded",
            "category": "fullstack",
            "users": 10,
            "gif": "https://i.imgur.com/rYnr1UX.gif",
            "video": "https://i.imgur.com/lIX0SUO.mp4"
        },
        {
            "title": "QuerySpace",
            "description": "A platform where users can create spaces, upload multiple PDFs and URLs, and ask questions based on the uploaded content.",
            "image": "https://i.imgur.com/5T4Bjwj.png",
            "url": "https://github.com/HarshVz/QuerySpace",
            "status": "uploaded",
            "category": "genAI",
            "users": 8,
            "gif": "https://i.imgur.com/fHcia67.gif",
            "video": "https://i.imgur.com/9yI9KDI.mp4"
        },
        {
            "title": "Sales Analytics Dashboard",
            "description": "A web-based dashboard to analyze product sales, featuring top/worst performers, average stats, and charts.",
            "image": "NONE",
            "url": "https://github.com/HarshVz",
            "status": "not uploaded",
            "category": "fullstack",
            "users": "-",
            "gif": "https://i.imgur.com/dJtDxJt.gif",
            "video": "https://drive.google.com/file/d/1LRoWDxj9J4CLdkJa-yfZ5WJYME6A2xCY/preview"
        },
        {
            "title": "Medical Report Analysis System",
            "description": "A system to extract, filter, and analyze medical reports from PDFs, displaying important health insights and charts.",
            "image": "NONE",
            "url": "https://github.com/HarshVz",
            "status": "in progress",
            "category": "fullstack with genai",
            "users": "-",
            "gif": "https://i.imgur.com/UNcoSEg.gif",
            "video": "https://drive.google.com/file/d/17OnZQTcxT9ItLpiyULh8gtwu-SF5jNOO/preview"
        },
        {
            "title": "Portfolio Site",
            "description": "A Portfolio landing page for gaurav creates.",
            "image": "https://i.imgur.com/eSUKamh.png",
            "url": "https://gauravcreates.pages.dev/",
            "status": "uploaded",
            "category": "frontend",
            "users": "-",
            "gif": "https://i.imgur.com/eSUKamh.png",
            "video": "https://i.imgur.com/v1Ydhfm.mp4"
        },
        {
            "title": "AmoledWallpapers",
            "description": "A webapp where users can find the amoled wallpapers, which helps them save battery due to more black percentage.",
            "image": "https://i.imgur.com/58rNIdC.png",
            "url": "https://amoledwallpapers.vercel.app/",
            "status": "uploaded",
            "category": "frontend",
            "users": "-",
            "gif": "https://i.imgur.com/NimolEw.gif",
            "video": "https://i.imgur.com/MpDqfb3.mp4"
        }
    ]

    const handleMouseEnter = (index) => {
        // setHoveredIndex(index);
        // setEnableImage(index)
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
        // setHoveredIndex(null);
        // setEnableImage(null)
    };



    return (
        <section className={`my-8 grid w-full gap-5 capitalize md:grid-cols-2 md:gap-5 ${classList2}`}>
            <div className="title mb-1 border-b border-b-neutral-700 pb-1 text-neutral-400 capitalize md:col-span-2">Projects</div>

            {(projects_info.length <= 0 && static_projects) &&
                (
                    static_projects.map((project, index) => (
                        <article className={`rounded-xl exp1 grid md:col-span-2 md:grid-cols-2 gap-1 mb-2 md:gap-0 transition duration-300 ease-linear blur-none`}
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            onClick={() => openModal(project)}
                        >

                            <div className={`cursor-pointer text-neutral-300 transition duration-300 ease-linear ${project.status.toLowerCase().includes('not') ? " hover:text-red-500" : "hover:text-green-500"} ${project.status.toLowerCase().includes('progress') ? "hover:text-yellow-500" : "hover:text-green-500"}`}>
                                <div className='flex flex-row gap-3 md:gap-3 items-center cursor-pointer'>
                                    <div className={`h-2 w-2 rounded-full ${project.status.toLowerCase().includes('not') ? "bg-red-500 hover:text-red-500" : "bg-green-500 hover:text-green-500"} ${project.status.toLowerCase().includes('progress') ? "bg-yellow-500 hover:text-yellow-500" : "bg-green-500 hover:text-green-500"}`}></div>
                                    <h1 className='flex flex-row'>{project.title} <div className='mx-2 px-3 bg-zinc-800 rounded-full text-sm border-zinc-700 border items-center flex justify-center'>{project.users}</div> </h1>
                                </div>
                            </div>
                            <div className="text-neutral-400 pl-5 md:pl-0">
                                <p>
                                    {project.description}
                                </p>
                            </div>
                        </article>
                    ))
                )
            }




            {(projects_info.length > 0 && projects_info) &&
                (
                    projects_info.map((project, index) => (
                        <article className={`rounded-xl exp1 grid md:col-span-2 md:grid-cols-2 gap-1 mb-2 md:gap-0 transition duration-300 ease-linear blur-none`}
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            onClick={() => openModal(project)}
                        >

                            <div className={`cursor-pointer text-neutral-300 transition duration-300 ease-linear ${project.status.toLowerCase().includes('not') ? " hover:text-red-500" : "hover:text-green-500"} ${project.status.toLowerCase().includes('progress') ? "hover:text-yellow-500" : "hover:text-green-500"}`}>
                                <div className='flex flex-row gap-3 md:gap-3 items-center cursor-pointer'>
                                    <div className={`h-2 w-2 rounded-full ${project.status.toLowerCase().includes('not') ? "bg-red-500 hover:text-red-500" : "bg-green-500 hover:text-green-500"} ${project.status.toLowerCase().includes('progress') ? "bg-yellow-500 hover:text-yellow-500" : "bg-green-500 hover:text-green-500"}`}></div>
                                    <h1 className='flex flex-row'>{project.title} <div className='mx-2 px-3 bg-zinc-800 rounded-full text-sm border-zinc-700 border items-center flex justify-center'>{project.users}</div> </h1>
                                </div>
                            </div>
                            <div className="text-neutral-400 pl-5 md:pl-0">
                                <p>
                                    {project.description}
                                </p>
                            </div>
                        </article>
                    ))
                )
            }
        </section>
    )
}

export default ProjectSection
