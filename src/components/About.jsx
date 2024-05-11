import React from 'react';

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Me</p>
                </div>

                <p className="text-xl mt-20">
                    As a recent graduate engineer, I am ready to implement the knowledge I have gained in my education and studies to the responsibilities of the position in my business life. I am
                    diligent about learning new technologies and I desire to have an international career as a frontend developer.
                </p>

                <br />

                <p className="text-xl">
                    Since I love to work web applications, I have honed my skills in Javascript, React,js and Tailwind.css. I am well-versed in the latest industry trends and best practices, and I am
                    constantly seeking opportunities to enhance my skills and stay up-to-date with emerging technologies.
                </p>
            </div>
        </div>
    );
};

export default About;
