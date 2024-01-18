import React from 'react';
import Section from "./common/Section";
import {FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';

import portfolio_fosterpet from '../assets/Portofolio_FosterPet.png';

const Portfolio = () => {

    const PROJECTS = [
        {
            id: 1,
            title: "Foster Pet",
            image: portfolio_fosterpet,
            github: "   ",
            link: "   ",
        },
    ];


    return (
        <Section
            title={"Portfolio"}
            subtitle={"Here are some of my projects"}
        >

        <div className={"grid gap-8 lg:gap-14 lg:grid-cols-2"}>
            {
                PROJECTS.map(PROJECTS => (
                    <div key={PROJECTS.id} className={"max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"}>
                        <img src={PROJECTS.image} alt={PROJECTS.title} className={"w-2/3"} />
                        <div className={"flex flex-col items-center justify-evenly p-1 w-1/3"}>
                            <h3 className={"mt-5 text-base lg:text-lg"}>{PROJECTS.title}</h3>
                            <a href={PROJECTS.github} target="_blank" rel="noopener noreferrer" className={"text-2xl text-gray-500 cursor-pointer hover:text-gray-700 hover:scale-110"}>
                                <FaGithub />
                            </a>
                            <a href={PROJECTS.link} target="_blank" rel="noopener noreferrer" className={"text-2xl text-gray-500 cursor-pointer hover:text-gray-700 hover:scale-110"}>
                                <FaExternalLinkSquareAlt />
                            </a>
                        </div>
                    </div>
                ))
            }

        </div>

        </Section>
    );
};

export default Portfolio;