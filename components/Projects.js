import React from 'react';
import {IoCodeSharp, IoLogoGithub} from "react-icons/io5";
import ReactTooltip from "react-tooltip";

export default function Projects() {
    const myProjects = [
        {
            id: 1,
            name: 'Music App React Native',
            description: 'Music App with React Native',
            demo_link: '',
            github_link: 'https://github.com/akncnkoc/music-app-react-native'
        },
        {
            id: 2,
            name: 'Ocean UI',
            description: 'My custom build high end functional react components',
            demo_link: '',
            github_link: 'https://github.com/akncnkoc/ocean-ui'
        },
        {
            id: 3,
            name: 'React Netflix App',
            description: 'Netflix Clone with React',
            demo_link: '',
            github_link: 'https://github.com/akncnkoc/react-netflix-app'
        },
        {
            id: 4,
            name: 'Image Processing',
            description: 'Image resolution enlargement app with Processing with JAVA',
            demo_link: '',
            github_link: 'https://github.com/akncnkoc/imageprocessing'
        },
        {
            id: 5,
            name: 'Movie App',
            description: 'The Movie API using App with React',
            demo_link: '',
            github_link: 'https://github.com/akncnkoc/imageprocessing'
        },
    ];
    return (
        <div className="container py-12">
            <div className="text-3xl font-semibold flex space-x-2">
                <IoCodeSharp/>
                <span>PROJECTS</span>
            </div>
            <div className="grid grid-cols-2 gap-3 my-12">
                {
                    myProjects.map((item) => (
                        <div className="flex flex-col p-4 bg-white rounded-lg shadow-2xl px-8 space-y-4">
                            <span className="text-3xl">{item.name}</span>
                            <span className="text-gray-500">{item.description}</span>
                            <a data-tip={item.name} href={item.github_link} target="_blank" className="w-8 h-8 bg-black flex items-center justify-center text-white rounded-full">
                                <IoLogoGithub size="24" />
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}