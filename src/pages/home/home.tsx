import React from 'react';
import './home.css';

const home = () => {
    
    return (
        <div className="home">

            <div className="text">

                <p className="title">Hey! I'm </p> 
                <p className="name">CHINMAY</p>
                <p> Computer Science Graduate Student & Programmer  <br /> </p>
                <p> This is my corner of the forest :)  </p>

                <div className="socials">

                    <hr></hr>

                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <a href="https://github.com/chinmayayy" target="_blank" title="Github">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 13.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 7 12 7s5 2.358 5 6.5z"></path>
                                <path d="M12 16.5v-2.902a2.53 2.53 0 00-.705-1.958c2.355-.263 4.83-1.155 4.83-5.25A4.08 4.08 0 0015 3.578 3.803 3.803 0 0014.932.75S14.047.487 12 1.86a10.035 10.035 0 00-5.25 0C4.702.487 3.817.75 3.817.75a3.803 3.803 0 00-.067 2.827 4.08 4.08 0 00-1.125 2.835c0 4.065 2.475 4.958 4.83 5.25a2.528 2.528 0 00-.705 1.935V16.5m0-2.25C3 15.375 3 12.375 1.5 12l5.25 2.25z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1300">
                        <a href="https://www.linkedin.com/in/chinmay-chahar/" title="Linkedin">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 14.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 8 12 8s5 2.358 5 6.5z"></path>
                                <path d="M12 6a4.5 4.5 0 014.5 4.5v5.25h-3V10.5a1.5 1.5 0 10-3 0v5.25h-3V10.5A4.5 4.5 0 0112 6v0zM4.5 6.75h-3v9h3v-9zM3 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1900">
                        <a href="mailto:chinmay.cc.06@gmail.com" target="_blank" title="Email">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 13.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 7 12 7s5 2.358 5 6.5z"></path>
                                <path d="M3 3h12c.825 0 1.5.675 1.5 1.5v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9C1.5 3.675 2.175 3 3 3z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16.5 4.5L9 9.75 1.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>

                    <hr></hr>

                </div>

            </div>

        </div>
    )
};

export default home;