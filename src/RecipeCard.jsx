import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <span className="text-sm text-orange-500 font-semibold capitalize">
          {recipe.category}
        </span>

        <h2 className="text-xl font-bold mt-2">
          {recipe.title}
        </h2>

        <p className="text-gray-500 mt-2">
          {recipe.description}
        </p>

        <div className="flex justify-between items-center mt-5">

          <span className="text-sm text-gray-500">
            ⏱ {recipe.cookingTime}
          </span>

          <Link
            to={`/recipes/${recipe.id}`}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
          >
            View Recipe
          </Link>

        </div>

      </div>
    </div>
  );
}

export default RecipeCard;