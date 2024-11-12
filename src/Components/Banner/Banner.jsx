import React from 'react';
import banner_img from "../../assets/books.jpg"
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            src={banner_img}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div className='grid gap-10 p-10'>
            <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
            <button className="btn btn-primary w-48">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;