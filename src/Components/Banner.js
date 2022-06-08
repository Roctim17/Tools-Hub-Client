import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full" alt="Pizza" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" className="w-full" alt="Pizza" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" className="w-full" alt="Pizza" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" className="w-full" alt="Pizza" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        // <div className="carousel carousel-center rounded-box">
        //     <div className="carousel-item">
        //         <img src="https://i.ibb.co/VDZFZnL/pexels-anna-shvets-5641937.jpg" alt="Pizza" width='300px' height='300px' />
        //     </div>
        //     <div className="carousel-item">
        //         <img src="https://i.ibb.co/yhV3sb2/pexels-cottonbro-4488660.jpg" alt="Pizza" width='300px' height='300px' />
        //     </div>
        //     <div className="carousel-item">
        //         <img src="https://i.ibb.co/xFSrD56/pexels-channnsy-11716661.jpg" alt="Pizza" width='300px' height='300px' />
        //     </div>
        //     <div className="carousel-item">
        //         <img src="https://i.ibb.co/1ZPHtRk/pexels-polesie-toys-4492371.jpg" alt="Pizza" width='300px' height='300px' />
        //     </div>
        //     <div className="carousel-item">
        //         <img src="https://i.ibb.co/sCDjJ1B/pexels-karolina-grabowska-7285926.jpg" alt="Pizza" width='300px' height='300px' />
        //     </div>
        //     <div className="carousel-item">
        //         <img src="https://i.ibb.co/2vVx8W8/pexels-kateryna-babaieva-2760289.jpg" alt="Pizza" width='300px' height='300px' />
        //     </div>
        //     <div className="carousel-item">
        //         <img src="https://i.ibb.co/ysqCXL0/pexels-pixabay-73833.jpg" alt="Pizza" width='300px' height='300px' />
        //     </div>
        // </div>
    );
};

export default Banner;