import React from 'react';
import Section from "./common/Section";
import {FaGithub, FaFigma, FaDribbble, FaMedium } from 'react-icons/fa';

// import portfolio_fosterPet from '../assets/Portofolio_FosterPet.png';
import portfolio_mobileBank from '../assets/Portofolio_MobileBank.png';
import portfolio_eduApp from '../assets/Portofolio_EduApp.png';
import portfolio_weatherApp from '../assets/Portofolio_WeatherApp.png';
import portfolio_bookStore from '../assets/Portofolio_BookApp.png';
import portfolio_workify from '../assets/Portofolio_Workify.png';



const Portfolio = () => {

    const PROJECTS = [
        {
            id: 1,
            title: "Mobile Banking App",
            subtitle: "Designed for a Sri Lankan Bank",
            image: portfolio_mobileBank,
            github: "",
            figma:"https://www.figma.com/design/QI8tAlS0zF3wF7puboI74e/Research---Mobile-Banking-App-Prototype?t=8TDCpIfhAGzLd1Hj-1",
            medium: "",
            dribble: "",

        },
        // {
        //     id: 2,
        //     title: "FosterPet",
        //     subtitle: "A Pet Adoption Platform for Sri Lanka",
        //     image: portfolio_fosterPet,
        //     github: "",
        //     figma:"https://www.figma.com/design/QI8tAlS0zF3wF7puboI74e/Research---Mobile-Banking-App-Prototype?t=8TDCpIfhAGzLd1Hj-1",
        //     medium: "",
        //     dribble: "",
        // },
        {
            id: 3,
            title: "Education Collaboration app",
            subtitle: "For Sri Lankan Students",
            image: portfolio_eduApp,
            github: "",
            figma:"https://www.figma.com/design/dFUkP7rv7ijUORrefz5cF7/Education-Collaboration-Platform",
            medium: "",
            dribble: "",
        },
        {
            id: 4,
            title: "Weather App",
            subtitle: "Simple UI Design",
            image: portfolio_weatherApp,
            github: "",
            figma:"https://www.figma.com/design/JMSKVHp6D1iJFuO20GSlTy/WeatherApp",
            medium: "",
            dribble: "https://dribbble.com/shots/24436629-Weather-App-UI-Design",
        },
        {
            id: 5,
            title: "Book Store App",
            subtitle: "Simple UI Design",
            image: portfolio_bookStore,
            github: "",
            figma:"https://www.figma.com/design/cDw4DG36BzVTsH4a8s28MT/ChapterOne-(Book-Selling-Website)",
            medium: "",
            dribble: "",
        },
        {
            id: 6,
            title: "Workify",
            subtitle: "Freelancing Website",
            image: portfolio_workify,
            github: "",
            figma:"https://www.figma.com/design/AXoKZYt5l57eS4e9r0mPtA/Workify-(Freelancer-Website)",
            medium: "",
            dribble: "",
        },

    ];


    return (
        <Section
            title={"Portfolio"}
            subtitle={"Here are some of my projects"}
        >

        <div className={"grid gap-8 lg:gap-14 lg:grid-cols-2"}>
            {
                PROJECTS.map(PROJECT => {

                    const icons = [
                        PROJECT.github && <a href={PROJECT.github} target="_blank" rel="noopener noreferrer" className={"text-xl text-gray-500 cursor-pointer hover:text-gray-700 hover:scale-110"} key="github"><FaGithub /></a>,
                        PROJECT.figma && <a href={PROJECT.figma} target="_blank" rel="noopener noreferrer" className={"text-xl text-gray-500 cursor-pointer hover:text-gray-700 hover:scale-110"} key="figma"><FaFigma /></a>,
                        PROJECT.medium && <a href={PROJECT.medium} target="_blank" rel="noopener noreferrer" className={"text-xl text-gray-500 cursor-pointer hover:text-gray-700 hover:scale-110"} key="blog"><FaMedium /></a>,
                        PROJECT.dribble && <a href={PROJECT.dribble} target="_blank" rel="noopener noreferrer" className={"text-xl text-gray-500 cursor-pointer hover:text-gray-700 hover:scale-110"} key="blog"><FaDribbble /></a>
                    ].filter(Boolean);

                    return (
                    <div key={PROJECT.id} className={"max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"}>
                        <img src={PROJECT.image} alt={PROJECT.title} className={"w-2/3 object-cover"} />
                        <div className={"flex flex-col items-center justify-evenly p-1 w-1/3"}>
                            <div className={"mt-5"}>
                                <h3 className={"text-sm lg:text-lg font-semibold"}>{PROJECT.title}</h3>
                                <h4 className={"text-xs lg:text-base text-gray-500"}>{PROJECT.subtitle}</h4>
                            </div>
                            <div className={`m-5 flex ${icons.length === 1 ? 'justify-center' : 'justify-between'} w-1/2`}>
                                {icons}
                            </div>
                        </div>
                    </div>
                );
                })
            }

        </div>

        </Section>
    );
};

export default Portfolio;
