import React from 'react'
import beauty from '../assets/explore/beauty.jpg';
import food from '../assets/explore/food.jpg';
import arts from '../assets/explore/arts.jpg';
import family from '../assets/explore/family.jpg';
import finance from '../assets/explore/finance.jpg';
import wellness from '../assets/explore/wellness.jpg';
import travel from '../assets/explore/travel.jpg';
import community from '../assets/explore/community.jpg';
import { Link } from 'react-router-dom';
import Blog from './Blog';


function Categories() {
  return (
    <>
    <Blog/>
   
      <div data-theme="valentine" className="py-10 px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-semibold text-center my-6 py-6">
            Explore Our Categories
          </h2>



          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example card 1 */}
            {/* Beauty & Self-Care Card */}
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={beauty}
                  alt="Beauty & Self-Care"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-bold">Beauty &amp; Self-Care</h3>
                <p className="text-gray-600">Tips and tutorials for natural beauty.</p>
                <div className="card-actions justify-center">
                <Link to="/articles/beauty" className="btn btn-outline btn-primary">
                Read More
              </Link>
                </div>
              </div>
            </div>

            {/* Food & Nutrition Card */}
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={food}
                  alt="Food & Nutrition"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-bold">Food &amp; Nutrition</h3>
                <p className="text-gray-600">Healthy recipes and diet plans.</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline btn-primary">Read More</button>
                </div>
              </div>
            </div>


            {/* Family & Lifestyle Card */}
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={family}
                  alt="Family & Lifestyle"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-bold">Family &amp; Lifestyle</h3>
                <p className="text-gray-600">Parenting tips, after delivery care, and more.</p>
                <div className="card-actions justify-center">
                <Link to="/articles/family" className="btn btn-outline btn-primary">
                Read More
              </Link>
                </div>
              </div>
            </div>

            {/* Arts, Crafts & Fashion Card */}
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={arts}
                  alt="Arts, Crafts & Fashion"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-bold">Arts, Crafts &amp; Fashion</h3>
                <p className="text-gray-600">Rangoli designs, DIY art, and more.</p>
                <div className="card-actions justify-center">
                <Link to="/articles/arts" className="btn btn-outline btn-primary">
                Read More
              </Link>
                </div>
              </div>
            </div>

            {/* Finance & Career Card */}
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={finance}
                  alt="Finance & Career"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-bold">Finance &amp; Career</h3>
                <p className="text-gray-600">Quick tips to boost your money and career</p>
                <div className="card-actions justify-center">
                <Link to="/articles/finance" className="btn btn-outline btn-primary">
                Read More
              </Link>
                </div>
              </div>
            </div>

            {/* Health and wellness Card */}
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={wellness}
                  alt="Health and wellness"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-bold">Health &amp; Wellness</h3>
                <p className="text-gray-600">Easy ideas for staying fit and healthy</p>
                <div className="card-actions justify-center">
                <Link to="/articles/wellness" className="btn btn-outline btn-primary">
                Read More
              </Link>
                </div>
              </div>
            </div>

            {/* Travel & Leisure Card */}
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={travel}
                  alt="Travel and Leisure"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-bold">Travel &amp; Leisure</h3>
                <p className="text-gray-600">Simple guides for your next adventure</p>
                <div className="card-actions justify-center">
                <Link to="/articles/travel" className="btn btn-outline btn-primary">
                Read More
              </Link>
                </div>
              </div>
            </div>

            {/* Community Card */}
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={community}
                  alt="community"
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-bold">Community</h3>
                <p className="text-gray-600">Connect and share with like-minded folks</p>
                <div className="card-actions justify-center">
                <Link to="/articles/community" className="btn btn-outline btn-primary">
                Read More
              </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Categories;
