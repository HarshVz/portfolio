import React from 'react'

const Modal = ({isOpen, closeModal, selectedProject}) => {
    const project = selectedProject ||
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
        }


      const statusColors = {
        'uploaded': 'bg-green-800 text-green-200',
        'not uploaded': 'bg-red-800 text-red-200',
        'in progress': 'bg-yellow-800 text-yellow-200'
      };

  return (
    <div className={`${isOpen ? '' : 'translate-y-full' } w-full min-h-screen h-full fixed left-0 top-0 bg-neutral-950/95 flex justify-center items-center z-50 transition duration-300 ease-in-out text-neutral-100 p-8`} style={{
        zIndex: 1000
    }}>
        <div className="max-w-3xl mx-auto bg-neutral-900 rounded-lg overflow-y-auto shadow-xl h-full pb-10">
        {/* <button className='absolute px-5 py-2 bg-neutral-950 rounded-lg m-5 border-2 border-neutral-800 '
            onClick={() => closeModal()}
            >Close</button> */}
{project.video && !(project.video.includes("drive")) && (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto aspect-video object-cover"
          />
        )}
        {project.video.includes("drive") && project.video && (
            <div className='aspect-video'>
                <iframe src={project.video} className="w-full h-full" allow="autoplay"></iframe>
            </div>

        )}
                <div className="p-6 border-b border-neutral-800">
          <div className="flex justify-between items-start">
            <div className='w-full'>
        <div className='w-full flex justify-between items-center flex-row'>
        <h1 className="text-3xl font-bold text-neutral-100 mb-2">
                {project.title}
              </h1>
                          <button className='px-5 py-2 bg-neutral-900 rounded-lg border-2 border-neutral-800 cursor-pointer hover:bg-neutral-800 transition duration-300 ease-in-out hover:rotate-2 hover:scale-95 hidden md:block'
            onClick={() => closeModal()}
            >Go Back 🡤</button>
        </div>
              <div className="flex space-x-2">
                <span
                  className={`px-2 py-1 rounded-full capitalize text-xs font-medium ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
                <span className="px-2 py-1 capitalize rounded-full text-xs font-medium bg-neutral-800 text-neutral-300">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </div>


        {/* Project Description */}
        <div className="p-6">
          <p className="text-neutral-300 mb-6">
            {project.description}
          </p>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Users */}
            <div className="flex items-center space-x-2 bg-neutral-800 p-3 rounded-md">
              {/* <Users className="w-5 h-5 text-neutral-400" /> */}
              <span className="text-neutral-200  transition duration-300 hover:scale-95">
                Joined Users: {project.users}
              </span>
            </div>

            {/* Video Demo Link */}
            {project.url && (
              <div className="flex items-center space-x-2 bg-neutral-800 p-3 rounded-md">
                {/* <Video className="w-5 h-5 text-neutral-400" /> */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-neutral-100 underline transition duration-300 hover:scale-95"
                >
                  Visit Site 🡥
                </a>
              </div>
            )}

<button className='space-x-2 bg-neutral-900 border-2 border-neutral-800 p-3 rounded-md text-center duration-300 ease-in-out hover:rotate-2 hover:scale-95 block md:hidden cursor-pointer'
            onClick={() => closeModal()}
            >Go Back 🡤</button>
          </div>
        </div>


        </div>



    </div>
  )
}

export default Modal
