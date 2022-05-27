import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Name
                </div>
                <div className="collapse-content">
                    <p>Md. Rokibul Islam Roctim</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Email
                </div>
                <div className="collapse-content">
                    <p>mdrokibulislamroctim@gmail.com</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    educational background
                </div>
                <div className="collapse-content">
                    <p>Accounting (Honours)</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    skills
                </div>
                <div className="collapse-content text-center">
                    <p>Html <progress className="progress progress-warning w-56" value="95" max="100"></progress></p>
                    <p>CSS <progress className="progress progress-warning w-56" value="95" max="100"></progress></p>
                    <p>Bootstrap <progress className="progress progress-warning w-56" value="95" max="100"></progress></p>
                    <p>tailwind <progress className="progress progress-warning w-56" value="85" max="100"></progress></p>
                    <p>JavaScript <progress className="progress progress-warning w-56" value="85" max="100"></progress></p>
                    <p>ReactJs <progress className="progress progress-warning w-56" value="85" max="100"></progress></p>
                    <p>Node Js <progress className="progress progress-warning w-56" value="70" max="100"></progress></p>
                    <p>MongoDB <progress className="progress progress-warning w-56" value="70" max="100"></progress></p>
                    <p>Express <progress className="progress progress-warning w-56" value="70" max="100"></progress></p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    projects
                </div>
                <div className="collapse-content text-center">
                    <p><a href='https://resilient-sawine-f4810f.netlify.app/' target='_blank'>Ware House</a></p>
                    <p><a href='https://luminous-malasada-5308f9.netlify.app' target='_blank'>Yoga</a></p>
                    <p><a href='https://roctim17.github.io/fitnessclub/' target='_blank'>Fitness Club</a></p>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;