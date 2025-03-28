import React from 'react';
import { Video, Clock, Users } from 'lucide-react';

const Showcase = () => {
  const project = {
    title: '1:1 Meetings Redesign',
    description: 'Our goal was to make 1:1 meetings more contextual and meaningful to enhance engagement. The revamp enabled users to set focused agendas, take relevant notes, create tasks, access employee key information upfront, and align priorities with company goals.',
    status: 'in progress',
    category: 'fullstack',
    users: 250,
    videoDemo: 'https://i.imgur.com/lIX0SUO.mp4'
  };

  const statusColors = {
    'uploaded': 'bg-green-800 text-green-200',
    'not uploaded': 'bg-red-800 text-red-200',
    'in progress': 'bg-yellow-800 text-yellow-200'
  };

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-100 p-8">
      <div className="max-w-3xl mx-auto bg-neutral-900 rounded-lg overflow-hidden shadow-xl">
        {/* Video Section */}
        {project.videoDemo && (
          <video
            src={project.videoDemo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto aspect-video object-cover"
          />
        )}

        {/* Project Header */}
        <div className="p-6 border-b border-neutral-800">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-neutral-100 mb-2">
                {project.title}
              </h1>
              <div className="flex space-x-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300">
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
              <Users className="w-5 h-5 text-neutral-400" />
              <span className="text-neutral-200">
                Users: {project.users}
              </span>
            </div>

            {/* Video Demo Link */}
            {project.videoDemo && (
              <div className="flex items-center space-x-2 bg-neutral-800 p-3 rounded-md">
                <Video className="w-5 h-5 text-neutral-400" />
                <a
                  href={project.videoDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-neutral-100 underline"
                >
                  Download Video
                </a>
              </div>
            )}
          </div>

          {/* Additional Details */}
          <div className="mt-6 bg-neutral-800 p-4 rounded-md">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">
              Project Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-neutral-400">Timeline</p>
                <p className="text-neutral-200">3 weeks</p>
              </div>
              <div>
                <p className="text-neutral-400">Role</p>
                <p className="text-neutral-200">Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
