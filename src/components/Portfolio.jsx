import React from 'react';
import movieapp from '../assets/portfolio/movie-app.jpg';
import recipeapp from '../assets/portfolio/recipe-app.jpg';
import todolist from '../assets/portfolio/to-do-list.jpg';
import ecommerce from '../assets/portfolio/ecommerce.jpg';
import weatherapp from '../assets/portfolio/weather-app.jpg';
import tictactoe from '../assets/portfolio/tictactoe.jpg';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: movieapp,
            name: 'React Movie App',
            demo: 'https://reacttailwind-movie-app.netlify.app/',
            link: 'https://github.com/ZeckeyBay/Movie-App',
        },
        {
            id: 2,
            src: recipeapp,
            name: 'React Recipe App',
            demo: 'https://recipeapp-reacttailwind.netlify.app/',
            link: 'https://github.com/ZeckeyBay/Recipe-App',
        },
        {
            id: 3,
            src: todolist,
            name: 'React To-Do-App',
            demo: 'https://to-do-list-reacttailwind.netlify.app/',
            link: 'https://github.com/ZeckeyBay/To-Do-List',
        },
        {
            id: 4,
            src: ecommerce,
            name: 'E-Commerce Website',
            demo: 'https://e-commerce-website-pro.netlify.app/',
            link: 'https://github.com/ZeckeyBay/E-Commerce-Website',
        },
        {
            id: 5,
            src: tictactoe,
            name: 'Tic-Tac-Toe Game',
            demo: 'https://tic-tac-toe-gamer.netlify.app/',
            link: 'https://github.com/ZeckeyBay/Tic-Tac-Toe-Game',
        },
        {
            id: 6,
            src: weatherapp,
            name: 'Weather App',
            demo: 'https://weather-api-appp.netlify.app/',
            link: 'https://github.com/ZeckeyBay/Javascript-Projects/tree/main/Weather-api-app',
        },
    ];

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, name, demo, link }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                            <p className="flex items-center justify-center mt-3">{name}</p>
                            <div className="flex items-center justify-center">
                                <a href={demo} className="w-1/2 px-11 py-3 m-4 duration-200 hover:scale-105">
                                    Demo
                                </a>

                                <a href={link} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
