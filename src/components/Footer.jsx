import React from 'react';
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

const Footer = () => {
    const SOCIAL = [
        {
            id: 1,
            name: 'Twitter',
            url: 'https://twitter.com/maheladissa',
            icon: <FaTwitter/>
        },
        {
            id: 2,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/mahela-dissanayake/',
            icon: <FaLinkedin/>
        },
        {
            id: 3,
            name: 'Facebook',
            url: 'https://www.facebook.com/mahela.dissanayake.101',
            icon: <FaFacebook/>
        },
        {
            id: 4,
            name: 'Github',
            url: 'https://github.com/maheladissa',
            icon: <FaGithub/>
        },
    ]
    return (
        <section className={"min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center"}>

            <div className={"flex w-full items-center justify-evenly text-3xl"}>
                {
                    SOCIAL.map(SOCIAL => (
                        <a href={SOCIAL.url}
                           key={SOCIAL.id}
                           target={"_blank"}
                           rel={"noopener noreferrer"}
                           className={"cursor-pointer duration-300 ease-in-out hover:text-teal-600"}>
                            {SOCIAL.icon}
                        </a>
                    ))
                }
            </div>

            <p className={"max-w-xl font-light text-gray-500 mb-5 mt-10 "}>© 2023 Mahela Dissanayake</p>
        </section>
    );
};

export default Footer;