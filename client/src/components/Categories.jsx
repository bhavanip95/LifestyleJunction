import React from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import { categoryConfig } from "../Config/CategoryConfig";

function Categories() {
  return (
    <>
      
      <div className="py-4 px-4 md:px-8 lg:px-16">
        {/* <h2 className="text-3xl font-semibold text-center my-6 py-6">
          Explore Our Categories
        </h2> */}
    


        {/* Category Cards */}
        <div data-theme="pastel" className=" py-2 px-4 flex flex-wrap justify-center gap-6">
          {Object.values(categoryConfig).map((category) => (
            <div key={category.key} className="card w-80 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-bold">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
                <div className="card-actions justify-center flex flex-wrap gap-2">
                  {category.subCategories.map((sub) => (
                    <Link
                      key={sub.key}
                      to={`/articles/${category.key}/${sub.key}`}
                      className="badge badge-secondary cursor-pointer"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Blog />
    </>
  );
}

export default Categories;
