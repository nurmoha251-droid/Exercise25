
import { useState } from "react";
import { Recipes } from "./recipes";
import RecipeCard from "./RecipeCard";

function Recipes() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter recipes
  const filteredRecipes = Recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Explore Recipes 🍲
          </h1>

          <p className="text-gray-500 mt-3">
            Discover delicious meals and find your next favorite recipe.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">

          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="all">All Categories</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>

        </div>

        {/* Recipe Count */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-semibold text-gray-800">
            All Recipes
          </h2>

          <span className="text-gray-500">
            {filteredRecipes.length} Recipes Found
          </span>

        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
              />
            ))}

          </div>

        ) : (

          /* Empty State */
          <div className="text-center py-20 bg-white rounded-xl">

            <div className="text-6xl mb-4">🔍</div>

            <h2 className="text-2xl font-bold text-gray-800">
              No Recipes Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try another search or select a different category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
              }}
              className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
            >
              Clear Filters
            </button>

          </div>

        )}

      </div>
    </div>
  );
}

export default Recipes;
