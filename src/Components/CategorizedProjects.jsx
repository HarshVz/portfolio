import React, {useState} from 'react'

const CategorizedProjects = ({classList2}) => {

    const projects_info = [
        {
            title: 'Bookmark Manager',
            description: 'A web app that allows users to save links, scrape metadata, search resources, and generate screenshots.',
            image: 'bookmark_manager_screenshot.png',
            url: 'https://your-bookmark-manager.com/',
            category: 'fullstack',
        },
        {
            title: 'Medical Report Analysis System',
            description: 'A system to extract, filter, and analyze medical reports from PDFs, displaying important health insights and charts.',
            image: 'medical_analysis_screenshot.png',
            url: 'https://your-medical-analysis.com/',
            category: 'fullstack',
        },
        {
            title: 'Sales Analytics Dashboard',
            description: 'A web-based dashboard to analyze product sales, featuring top/worst performers, average stats, and charts.',
            image: 'sales_analytics_screenshot.png',
            url: 'https://your-sales-dashboard.com/',
            category: 'frontend',
        },
        {
            title: 'Mock Interview Platform ( In Progress )',
            description: 'An AI-powered platform for mock interviews with a dashboard for performance analysis, focused on tech job roles.',
            image: 'mock_interview_screenshot.png',
            url: 'https://your-mock-interview.com/',
            category: 'fullstack',
        },
    ];

    const category = [
        "all",
        "fullstack",
        "frontend",
        "backend",
    ]

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [displayedProjects, setDisplayedProjects] = useState(projects_info)

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
      };

      // Handle mouse leave
      const handleMouseLeave = () => {
        setHoveredIndex(null);
      };

      const handleCategory = (cat) => {
        setSelectedCategory(cat);
        if (cat === 'all') {
            setDisplayedProjects(projects_info);
        } else {
            console.log(projects_info.filter(project => project.category.toLowerCase() === cat.toLowerCase()))
            setDisplayedProjects(projects_info.filter(project => project.category.toLowerCase() === cat.toLowerCase()));
        }
      };



    return (
            <section className={`my-8 grid w-full gap-5 capitalize md:grid-cols-2 md:gap-5 ${classList2}`}>

                <div class="title pb-1 text-neutral-400 capitalize md:col-span-2 font-mono flex justify-start items-center gap-2 overflow-auto" id="projects">
                    {
                        category.map((cat, i) => (
                            <button key={i}
                            className={`cursor-pointer rounded-full border border-neutral-700 bg-neutral-900 px-5 py-1 text-sm text-neutral-400 transition duration-300 ease-linear hover:text-yellow-500 ${selectedCategory === cat? 'bg-zinc-800 text-white' : 'text-neutral-300'}`}
                            onClick={() => handleCategory(cat)}
                            >{cat}</button>
                        ))
                    }
                </div>
            {(displayedProjects.length > 0 && displayedProjects) &&
                (
                    displayedProjects.map((project, index) => (
                        <article className={`exp1 grid md:col-span-2 md:grid-cols-2 gap-1 md:gap-0 transition duration-300 ease-linear blur-none`}
                        key={index}
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

export default CategorizedProjects
