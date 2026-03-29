import React from 'react';
import amla from '../assets/amla_lemon.png'; // Update with your actual image path

export const ReadMoreArticle = () => {
    const dummyData = {
        hairCare: [
            {
                title: "Amla & Lemon Paste: Strengthen Your Hair and Delay Greying",
                excerpt:
                    "A natural remedy to fortify hair follicles and prevent premature greying.",
                content: `Purpose: Strengthens hair follicles, prevents hair loss, and delays premature greying.

Ingredients:
2 tablespoons Amla powder
2 tablespoons Lemon juice

Preparation:
Mix amla powder with lemon juice to form a smooth paste.

Application:
Apply the paste evenly on the scalp.
Leave it on for about 30 minutes.
Rinse thoroughly with lukewarm water and a mild shampoo.`,
                category: "Hair Care",
                subCategory: "Amla & Lemon Paste",
                tags: ["Hair Strength", "Anti-Greying", "Natural Remedy"],
            },
        ],
    };

    return (
        <>
            <div data-theme="wireframe">
                <div className="container mx-auto p-4">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Left Section: Article Content */}
                        <div className="flex-grow">
                            {dummyData.hairCare.map((article, index) => (
                                <div key={index} className="card   p-3 my-4">
                                    <h1 className="text-2xl font-bold mb-2 text-red-600">{article.title}</h1>
                                    <p className="text-lg mb-4 text-green-600   ">{article.excerpt}</p>
                                    <div data-theme="lemonade" className="mb-4 p-6">
                                        {/* <h2 className="text-xl font-semibold mb-2">Details</h2> */}
                                        <pre className="whitespace-pre-wrap text-md ">
                                            {article.content}
                                        </pre>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {article.tags.map((tag, idx) => (
                                            <span key={idx} className="badge badge-secondary">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-sm font-medium text-blue-600">{article.category}</span>
                                        <span className="text-sm font-medium text-gray-500">/</span>
                                        <span className="text-sm font-medium text-blue-600">{article.subCategory}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Right Section: Display Image */}
                        <div className="w-full md:w-1/3 flex justify-center items-start p-3 my-4">
                            <img
                                src={amla}
                                alt="Side Display"
                                className="rounded-lg shadow-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};
