import React from 'react';
import Section from "./common/Section";
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

const Contact = () => {

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
        <Section
        title={"Contact"}
        subtitle={"Contact me Here"}
        >
            <div className={"flex flex-col items-center justify-center gap-8 text-center"}>
                <div className={"flex w-full items-center justify-evenly text-3xl"}>
                    {
                        SOCIAL.map(SOCIAL => (
                            <a href={SOCIAL.url}
                               key={SOCIAL.id}
                               target={"_blank"}
                               rel={"noopener noreferrer"}
                               className={"cursor-pointer duration-300 ease-in-out hover:text-rose-400"}>
                                {SOCIAL.icon}
                            </a>
                        ))
                    }
                </div>
            </div>


        </Section>
    );
};

export default Contact;