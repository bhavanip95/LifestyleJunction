import React from 'react'
import hair from '../assets/explore/hairDiy.png';
import dhokla from '../assets/explore/dhokla.png';
import rangooli from '../assets/explore/rangooli.png';

function Blog() {
  return (
    <div>
      <div data-theme="lofi" className="py-10 px-4 md:px-8 lg:px-16">
                <ul className="list bg-base-100 rounded-box shadow-md">
                  {/* Heading or Subheading */}
                  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                    Latest Community Blogs
                  </li>
      
                  {/* Blog 1: 20 Hair Masks test
                  <li className="list-row">
                    {/* Thumbnail Image */}
                    <div>
                      <img
                        className="size-20 rounded-box"
                        src={hair}
                        alt="Hair Mask"
                      />
                    </div>
                    {/* Title & Subtitle */}
                    <div>
                      <div>20 Hair Masks</div>
                      <div className="text-xs uppercase font-semibold opacity-60">Healthy & Shiny Hair</div>
                      <p className="list-col-wrap text-xs">
                        Explore 20 DIY hair masks packed with natural ingredients to revitalize and nourish your hair.
                        Perfect for tackling dryness, split ends, and more.
                      </p>
                    </div>
                    {/* Description */}
      
                    {/* Action Buttons (example icons) */}
                    <button className="btn btn-square btn-ghost">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
      
      
                  </li>
      
                  {/* Blog 2: 10 Famous Gujarati Foods */}
                  <li className="list-row">
                    <div>
                      <img
                        className="size-20 rounded-box"
                        src={dhokla}
                        alt="Gujarati Food"
                      />
                    </div>
                    <div>
                      <div>10 Famous Gujarati Foods</div>
                      <div className="text-xs uppercase font-semibold opacity-60">Must-Try Dishes</div>
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
      
                  </li>
      
                  {/* Blog 3: Daily Rangoli Designs */}
                  <li className="list-row">
                    <div>
                      <img
                        className="size-20 rounded-box"
                        src={rangooli}
                        alt="Rangoli"
                      />
                    </div>
                    <div>
                      <div>Daily Rangoli Design</div>
                      <div className="text-xs uppercase font-semibold opacity-60">Colorful Traditions</div>
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
      
                  </li>
                </ul>
              </div>
    </div>
  )
}

export default Blog
