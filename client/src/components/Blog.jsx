import React from 'react';
import hair from '../assets/explore/hairDiy.png';
import dhokla from '../assets/explore/dhokla.png';
import rangooli from '../assets/explore/rangooli.png';
import blogImage4 from '../assets/blogImage4.png';
import CreateBlog from './CreateBlog';

function Blog() {
  return (
    <div>
     


      {/* <div className="hero" data-theme="caramellatte">
            

             
          <div className="hero-content flex-col lg:flex-row gap-6">
            
            <img
              src={blogImage4}
              alt="Express yourself"
              className="w-full max-w-lg rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-4xl font-bold">What's on your mind</h1>
              <p className="py-6">
                Have something to say? Share it with people who get you!
              </p>
              <button className="btn btn-primary px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
                ✍️ Express Yourself
              </button>
            </div>
          </div>
        </div> */}
      <div data-theme="pastel" className="py-4 px-4 md:px-8 lg:px-16">
        <ul className="list bg-base-100 rounded-box shadow-md">
          {/* Heading */}
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Latest Community Blogs
          </li>

          {/* Blog 1: 20 Hair Masks */}
          <li className="list-row flex items-center gap-4 p-4 border-b">
            {/* Thumbnail Image */}
            <div>
              <img className="size-20 rounded-box" src={hair} alt="Hair Mask" />
            </div>
            {/* Title & Subtitle */}
            <div className="flex-1">
              <div className="font-semibold">20 Hair Masks</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Healthy & Shiny Hair
              </div>
              <p className="list-col-wrap text-xs">
                Explore 20 DIY hair masks packed with natural ingredients to revitalize and nourish your hair.
                Perfect for tackling dryness, split ends, and more.
              </p>
            </div>
            {/* Action Button */}
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </li>

          {/* Blog 2: 10 Famous Gujarati Foods */}
          <li className="list-row flex items-center gap-4 p-4 border-b">
            <div>
              <img className="size-20 rounded-box" src={dhokla} alt="Gujarati Food" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">10 Famous Gujarati Foods</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Must-Try Dishes
              </div>
              <p className="list-col-wrap text-xs">
                From Dhokla to Thepla, discover ten iconic Gujarati dishes that bring authentic flavors and
                cultural richness to your table.
              </p>
            </div>

            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </li>

          {/* Blog 3: Daily Rangoli Designs */}
          <li className="list-row flex items-center gap-4 p-4">
            <div>
              <img className="size-20 rounded-box" src={rangooli} alt="Rangoli" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Daily Rangoli Design</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Colorful Traditions
              </div>
              <p className="list-col-wrap text-xs">
                Add vibrancy to your doorstep each morning with simple, beautiful rangoli designs. Perfect for
                everyday or festive occasions.
              </p>
            </div>

            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <CreateBlog/>
    </div>
  );
}

export default Blog;
