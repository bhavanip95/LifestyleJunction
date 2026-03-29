import React,{useState}         from 'react';
const categoryOptions = {
    "Beauty & Self-Care": ["Hair Care", "Skin Care DIYs"],
    "Food & Nutrition": ["Recipes", "Diet Plans"],
    "Family & Lifestyle": ["Pregnancy", "Parenting", "After Delivery"],
    "Arts, Crafts & Fashion": ["Rangoli Designs", "DIY Art Projects", "Blouse & Fashion Designs"],
    "Finance & Career": ["Stocks & Earning", "Money Management"],
    "Health & Wellness": ["Yoga", "Gardening"],
    "Travel & Leisure": ["Travel Ideas"]
  };

const CreateBlogForm = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const subCategories = selectedCategory ? categoryOptions[selectedCategory] : [];


  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <form className="space-y-6">
          {/* Category Field */}
          <div className="flex flex-col gap-6">
      {/* Category Field */}
      <fieldset className="border border-gray-300 rounded p-4">
        <legend className="text-lg font-semibold">Category</legend>
        <select
          className="select w-full mt-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="" disabled>
            Pick a category
          </option>
          {Object.keys(categoryOptions).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </fieldset>

      {/* Sub-Category Field */}
      {selectedCategory && (
      <fieldset className="border border-gray-300 rounded p-4">
       <legend className="text-lg font-semibold">Sub Category</legend>
          <select className="select w-full mt-2">
            <option value="" disabled>
              Pick a sub category
            </option>
            {subCategories.map((subCategory) => (
              <option key={subCategory} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>
          </fieldset>
         
   
      )}
    </div>

          {/* Blog Title Field */}
          <fieldset className="border border-gray-300 rounded p-4">
  <legend className="text-lg font-semibold">Blog Title</legend>
  <input
    type="text"
    className="input input-bordered w-full mt-2"
    placeholder="E.g., How I Reduced Hair Fall in 2 Weeks"
  />
  <div className="text-sm text-gray-500 mt-2 italic">
    Write a short, catchy headline — it should tell readers what your blog is about in one line.
  </div>
</fieldset>


          {/* Excerpt Field */}
          <fieldset className="border border-gray-300 rounded p-4">
  <legend className="text-lg font-semibold">Short Description</legend>
  <input
    type="text"
    className="input input-bordered w-full mt-2"
    placeholder="A quick overview of your blog — shown under the title"
  />
  <div className="text-sm text-gray-500 mt-2 italic">
    Add 1–2 lines about what your blog covers. This helps readers decide to read more.
  </div>
</fieldset>


          {/* Content Field */}
          <fieldset className="border border-gray-300 rounded p-4">
  <legend className="text-lg font-semibold">Blog Content</legend>
  <textarea
    className="textarea textarea-bordered w-full mt-2 h-40"
    placeholder={`Start by sharing a story, recipe, experience, or step-by-step guide.\n\nTip: Include a Purpose, Ingredients (if needed), and a few steps or tips.`}
  ></textarea>
  <div className="text-sm text-gray-500 mt-2 italic">
    Don’t worry about perfect writing — just write like you're telling it to a friend!
  </div>
</fieldset>


          {/* Related Tags Field */}
          <fieldset className="border border-gray-300 rounded p-4">
            <legend className="text-lg font-semibold">Related Tags</legend>
            <div className="flex flex-wrap gap-2 mt-2">
              <label className="flex items-center gap-1">
                <input type="checkbox" defaultChecked className="checkbox" />
                <span className="text-sm">Tag 1</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" defaultChecked className="checkbox" />
                <span className="text-sm">Tag 2</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" defaultChecked className="checkbox" />
                <span className="text-sm">Tag 3</span>
              </label>
            </div>
          </fieldset>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-primary px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
            >
              Create Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogForm;
