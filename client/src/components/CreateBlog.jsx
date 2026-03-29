import React from 'react'
import blogImage4 from '../assets/blogImage4.png';
import { Link } from 'react-router-dom';

const CreateBlog = () => {
  return (
    <div>


             <div className="hero" data-theme="caramellatte">
            
 
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
              <Link to="/post-blog"  className="btn btn-primary px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
                ✍️ Express Yourself
              </Link >
            
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreateBlog