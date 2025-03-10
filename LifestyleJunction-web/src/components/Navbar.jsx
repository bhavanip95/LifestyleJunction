import React from "react"
import { Link } from "react-router-dom";
const   Navbar = ()=> {
    return (
      <>
       <div data-theme="dracula">
        <header className="navbar  border-b border-gray-200 px-4 md:px-8 lg:px-16">
          <div className="navbar-start flex items-center space-x-2">

            <span className="text-2xl font-semibold">
              Lifestyle Junction
            </span>
          </div>




          {/* Center nav links (visible on large screens) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-4 text-lg">
              {/* <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Blog</a></li> */}
               <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
              <li>
                <details>
                  <summary>Explore</summary>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64 relative z-50"
                  >
                    <li>
                      <details>
                        <summary>Beauty &amp; Self-Care</summary>
                        <ul className="p-2">
                          <li><a>Hair Care</a></li>
                          <li><a>Skin Care DIYs</a></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Food &amp; Nutrition</summary>
                        <ul className="p-2">
                          <li><a>Recipes</a></li>
                          <li><a>Diet Plans</a></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Family &amp; Lifestyle</summary>
                        <ul className="p-2">
                          <li><a>Pregnancy</a></li>
                          <li><a>Parenting</a></li>
                          <li><a>After Delivery</a></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Arts, Crafts &amp; Fashion</summary>
                        <ul className="p-3">
                          <li><a>Rangoli Designs</a></li>
                          <li><a>DIY Art Projects</a></li>
                          <li><a>Blouse &amp; Fashion Designs</a></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Finance &amp; Career</summary>
                        <ul className="p-2">
                          <li><a>Stocks &amp; Earning</a></li>
                          <li><a>Money Management</a></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Health &amp; Wellness</summary>
                        <ul className="p-2">
                          <li><a>Yoga</a></li>
                          <li><a>Gardening</a></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Travel &amp; Leisure</summary>
                        <ul className="p-2">
                          <li><a>Travel Ideas</a></li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          {/* Navbar end (search & sign in) */}
          <div className="navbar-end flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            <button className="btn btn-primary">Sign In</button>
          </div>
        </header>
      </div>
      </>
)};
export default Navbar;
