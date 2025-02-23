import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const ProjectSection = ({classList2}) => {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [enableImage, setEnableImage] = useState(null)

    const projects_info = [
        {
            title: 'Bookmark Manager',
            description: 'A web app that allows users to save links, scrape metadata, search resources, and generate screenshots.',
            image: 'https://i.pinimg.com/736x/16/22/69/1622691d2b9ca2767be788f402d2e85c.jpg',
            status: 'uploaded',
            url: 'https://toolsbook.vercel.app/',
        },
        {
            title: 'QuerySpace',
            description: 'A platform where users can create spaces, upload multiple PDFs and URLs, and ask questions based on the uploaded content.',
            image: 'queryspace_screenshot.png',
            status: 'uploaded',
            url: 'https://github.com/HarshVz/QuerySpace',
        },
        {
            title: 'Sales Analytics Dashboard',
            description: 'A web-based dashboard to analyze product sales, featuring top/worst performers, average stats, and charts.',
            image: 'sales_analytics_screenshot.png',
            status: 'not uploaded',
            url: 'https://github.com/HarshVz',
        },
        {
            title: 'Mock Interview Platform',
            description: 'An AI-powered platform for mock interviews with a dashboard for performance analysis, focused on tech job roles.',
            image: 'mock_interview_screenshot.png',
            status: 'in progress',
            url: 'https://github.com/HarshVz',
        },
        {
            title: 'Medical Report Analysis System',
            description: 'A system to extract, filter, and analyze medical reports from PDFs, displaying important health insights and charts.',
            image: 'medical_analysis_screenshot.png',
            status: 'in progress',
            url: 'https://github.com/HarshVz',
        },
    ];

    const handleMouseEnter = () => {
        setHoveredIndex(index);
        enableImage(index)
      };

      // Handle mouse leave
      const handleMouseLeave = () => {
        setHoveredIndex(null);
        enableImage(null)
      };



    return (
            <section className={`my-8 grid w-full gap-5 capitalize md:grid-cols-2 md:gap-5 ${classList2}`}>
            <div className="title mb-1 border-b border-b-neutral-700 pb-1 text-neutral-400 capitalize md:col-span-2">Projects</div>

            {(projects_info.length > 0 && projects_info) &&
                (
                    projects_info.map((project, index) => (
                        <article className={`exp1 grid md:col-span-2 md:grid-cols-2 gap-1 md:gap-0 transition duration-300 ease-linear blur-none`}
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        >
                            <div className={`cursor-pointer text-neutral-300 transition duration-300 ease-linear ${project.status.toLowerCase().includes('not') ? " hover:text-red-500" : "hover:text-green-500"} ${project.status.toLowerCase().includes('progress') ? "hover:text-yellow-500" : "hover:text-green-500"}`}>
                                <Link to={project.url} className='flex flex-row gap-3 md:gap-3 items-center'>
                                    <div className={`h-2 w-2 rounded-full ${project.status.toLowerCase().includes('not') ? "bg-red-500 hover:text-red-500" : "bg-green-500 hover:text-green-500"} ${project.status.toLowerCase().includes('progress') ? "bg-yellow-500 hover:text-yellow-500" : "bg-green-500 hover:text-green-500"}`}></div>
                                    <h1>{project.title} </h1>
                                </Link>
                            </div>
                            <div className="text-neutral-400 pl-5 md:pl-0">
                                <p>
                                     {project.description}
                                </p>
                            </div>
                            {/* <img src={`${project.image}`} alt={project.title} className={`aspect-video object-cover mt-3 w-full md:col-span-2 md:h-auto ${((enableImage !== null) && (index !== enableImage)) ? "h-0" : "h-full"}`} /> */}
                        </article>
                    ))
                )
            }
          </section>
    )
}

export default ProjectSection
