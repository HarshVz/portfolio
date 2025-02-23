import React from 'react'

const Skills = ({classList2}) => {

    const languages = [
        'JavaScript', 'Python', 'PHP', 'Java', 'C', 'C++'
    ]

    const frameworksTools = [
        'ReactJS', 'NodeJS', 'Express', 'TailwindCSS', 'MongoDB', 'Firebase', 'Axios', 'Vercel', 'Flask', 'Github'
    ]

  return (
    <section className={`my-8 grid w-full gap-5 capitalize md:grid-cols-2 md:gap-5 ${classList2}`}>
            <div className="title mb-1 border-b border-b-neutral-700 pb-1 text-neutral-400 capitalize md:col-span-2">Skills</div>
        <article className="exp1 grid md:col-span-2 md:grid-cols-2 gap-2">
            <div className="cursor-pointer text-neutral-300 transition duration-300 ease-linear hover:text-yellow-500">Languages</div>
            <div className="text-neutral-400 flex flex-row gap-3 font-mono flex-wrap">
                {languages.map((language) => (
                    <button key={language} className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 px-5 py-1 text-sm transition duration-300 ease-linear hover:text-yellow-500">{language}</button>
                ))}
            </div>
        </article>
        <article className="exp1 grid md:col-span-2 md:grid-cols-2 gap-2">
            <div className="cursor-pointer text-neutral-300 transition duration-300 ease-linear hover:text-yellow-500">Frameworks & Tools</div>
            <div className="text-neutral-400 flex flex-row gap-3 font-mono flex-wrap">
                {frameworksTools.map((frameworksTools) => (
                    <button key={frameworksTools} className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 px-5 py-1 text-sm transition duration-300 ease-linear hover:text-yellow-500">{frameworksTools}</button>
                ))}
            </div>
        </article>
  </section>
  )
}

export default Skills
