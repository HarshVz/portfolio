import React, {useState} from 'react'

const Projects = ({classList2}) => {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const projects_info = [
        {
            title: 'Bookmark Manager',
            description: 'A web app that allows users to save links, scrape metadata, search resources, and generate screenshots.',
            image: 'bookmark_manager_screenshot.png',
            url: 'https://your-bookmark-manager.com/',
        },
        {
            title: 'Medical Report Analysis System',
            description: 'A system to extract, filter, and analyze medical reports from PDFs, displaying important health insights and charts.',
            image: 'medical_analysis_screenshot.png',
            url: 'https://your-medical-analysis.com/',
        },
        {
            title: 'Sales Analytics Dashboard',
            description: 'A web-based dashboard to analyze product sales, featuring top/worst performers, average stats, and charts.',
            image: 'sales_analytics_screenshot.png',
            url: 'https://your-sales-dashboard.com/',
        },
        {
            title: 'Mock Interview Platform ( In Progress )',
            description: 'An AI-powered platform for mock interviews with a dashboard for performance analysis, focused on tech job roles.',
            image: 'mock_interview_screenshot.png',
            url: 'https://your-mock-interview.com/',
        },
    ];

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
      };

      // Handle mouse leave
      const handleMouseLeave = () => {
        setHoveredIndex(null);
      };



    return (
            <section className={`my-8 grid w-full gap-5 capitalize md:grid-cols-2 md:gap-5 ${classList2}`}>
            <div className="title mb-1 border-b border-b-neutral-700 pb-1 text-neutral-400 capitalize md:col-span-2">Projects</div>

            {(projects_info.length > 0 && projects_info) &&
                (
                    projects_info.map((project, index) => (
                        <article className={`exp1 grid md:col-span-2 md:grid-cols-2 gap-1 md:gap-0 transition duration-300 ease-linear blur-none ${((hoveredIndex !== null) &&(index !== hoveredIndex)) ? "blur-xs" : ""}`}
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        >
                            <div className="cursor-pointer text-neutral-300 transition duration-300 ease-linear hover:text-yellow-500">
                                <div className='flex flex-row gap-3 md:gap-3 items-center'>
                                    <div className="h-2 w-2 rounded-full bg-green-500 md:bg-yellow-500"></div>
                                    <h1>{project.title} </h1>
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

export default Projects
