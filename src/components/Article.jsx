// src/components/Article.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Dummy data for simulation
const dummyData = {
  beauty: [
    {
      _id: '1',
      title: "How to Get Glow by Home Ingredients",
      content: "Discover natural ingredients like turmeric, honey, and gram flour to achieve a natural glow using traditional methods."
    },
    {
      _id: '2',
      title: "Herbal Hair Care Secrets",
      content: "Learn the age-old Indian secret of oil massage and herbal treatments for healthy, luscious hair."
    }
  ],
  food: [
    {
      _id: '3',
      title: "Moong Dal Khichdi: A Comforting Recipe",
      content: "A simple, nutritious recipe perfect for vegetarians that combines lentils and rice for a balanced meal."
    },
    {
      _id: '4',
      title: "Spice Up Your Diet with Ayurvedic Recipes",
      content: "Explore recipes that blend traditional Indian spices with modern health tips for a balanced diet."
    }
  ],
  family: [
    {
      _id: '5',
      title: "Ayurvedic Pregnancy Tips",
      content: "Discover time-tested Ayurvedic practices to support a healthy pregnancy with proper nutrition and rest."
    },
    {
      _id: '6',
      title: "Modern Parenting with Traditional Values",
      content: "Integrate traditional Indian wisdom into your daily parenting routines for a nurturing family environment."
    }
  ],
  arts: [
    {
      _id: '7',
      title: "DIY Rangoli Designs for Beginners",
      content: "A step-by-step guide to creating beautiful rangoli designs that welcome prosperity and positive energy."
    },
    {
      _id: '8',
      title: "Crafting Your Own Blouse Designs",
      content: "Learn how to mix traditional embroidery with modern fashion trends to create unique ethnic blouses."
    }
  ],
  finance: [
    {
      _id: '9',
      title: "Investing Basics: A Guide for Beginners",
      content: "Learn how to invest wisely with simple steps that blend modern techniques with age-old saving principles."
    },
    {
      _id: '10',
      title: "Smart Money Management for a Balanced Life",
      content: "Discover practical tips on budgeting and managing your finances, inspired by traditional values and modern practices."
    }
  ],
  wellness: [
    {
      _id: '11',
      title: "Simple Yoga Poses to Start Your Day",
      content: "A beginner-friendly guide to morning yoga that energizes your body and calms your mind."
    },
    {
      _id: '12',
      title: "Herbal Remedies for Everyday Health",
      content: "Explore natural Ayurvedic remedies that harness the healing power of herbs for everyday wellness."
    }
  ],
  travel: [
    {
      _id: '13',
      title: "Traveling the Indian Way: A Veggie Journey",
      content: "Plan your next adventure with guides to India’s best vegetarian and cultural destinations."
    },
    {
      _id: '14',
      title: "Backwaters and Beyond: Kerala Travel Tips",
      content: "Discover the serene beauty of Kerala’s backwaters and learn travel tips that keep you true to a vegetarian lifestyle."
    }
  ],
  community: [
    {
      _id: '15',
      title: "Connecting Through Culture and Cuisine",
      content: "Learn how community events and traditional gatherings can bring people together over shared values and food."
    },
    {
      _id: '16',
      title: "Building a Supportive Community",
      content: "Find out how local groups and cultural clubs can help you connect with like-minded individuals."
    }
  ]
};

function Article() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simulate an API call with a timeout
    setTimeout(() => {
      // Access dummy data based on the category parameter (convert to lower case)
      const data = dummyData[category.toLowerCase()] || [];
      setArticles(data);
    }, 500); // 500ms delay to simulate network request
  }, [category]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Articles for {category}</h2>
      {articles.length === 0 ? (
        <p>No articles found for this category.</p>
      ) : (
        articles.map(article => (
          <div key={article._id} className="mb-4">
            <h3 className="font-semibold">{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Article;
