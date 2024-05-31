import React from "react";
import Section from "./common/Section";
import blog_DBSecurity from "../assets/Blog_DBSecurity.webp";
import blog_IDEval from "../assets/Blog_IDEval.webp";
import blog_PPractice from "../assets/Blog_ProfessionalPractice.webp";
import blog_SWLicense from "../assets/Blog_SWLicence.webp";


const Blog = () => {

    const POSTS = [
        {
            id: 1,
            title: "Interaction Design Evaluation Methods",
            image: blog_IDEval,
            content: "Typically, usability inspection is aimed at finding usability problems in the design, though some methods also address issues like the severity of the usability problems and the overall usability of an entire",
            link: "https://maheladissanayake.medium.com/interaction-design-evaluation-methods-497884dfb9c8",
        },
        {
            id: 2,
            title: "Professional Practices and Industry expectations",
            image: blog_PPractice,
            content: "The term ‘professional practice’ refers to the conduct and work of someone from a particular profession. A profession is any job that requires a certain level of education, skill, or training. There is typically",
            link: "https://maheladissanayake.medium.com/professional-practices-and-industry-expectations-a71801f035bb",
        },
        {
            id: 3,
            title: "Software Licensing",
            image: blog_SWLicense,
            content: "A software license is an agreement between the customer and the owner of a software program that allows the customer to do certain things that would otherwise be an infringement of copyright law. The software",
            link: "https://maheladissanayake.medium.com/software-licensing-62a8aac85d24",
        },
        {
            id: 4,
            title: "Database security",
            image: blog_DBSecurity,
            content: "Databases are becoming a huge part of every person’s life whether they are in the field of IT or not. From the small tasks like accessing our bank balance to running multinational corporations we are working",
            link: "https://medium.com/@maheladissanayake/database-security-878a5b75ffce",
        },
    ];

    return (
        <Section title={"Blog ✒️"} subtitle={"My top Medium blog articles"}>
            <div className={"flex flex-row gap-10 m-auto overflow-x-scroll overflow-y-hidden w-5/6 no-scrollbar p-10"}>
                {POSTS.map((post) => (
                    <div key={post.id} className={"flex flex-col items-center justify-center px-5 py-1 shadow-lg dark:shadow-gray-400 rounded-xl duration-300 ease-in-out shrink-0 w-60"}>
                        <div className={"flex flex-col align-middle h-16 overflow-y-hidden"}>
                            <h2 className={"text-lg font-bold text-center"}>{post.title}</h2>
                        </div>
                        <div className={"flex flex-col justify-center items-center text-center"}>
                            <img src={post.image} alt={post.title} className={"h-44 min-h-44 object-cover justify-center justify-self-center p-1"}/>
                        </div>
                        <div>
                            <p className={"text-sm text-center"}>{post.content}...</p>
                        <a href={post.link} target="_blank" rel="noopener noreferrer" className={"text-sm text-teal-600"}>
                            Read more
                        </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Blog;
