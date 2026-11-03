import { Recipes } from "./recipes";
import RecipeCard from "./RecipeCard";

function CategoryIndex() {
  return (
    <div>

      <h2 className="text-3xl font-bold mb-3">
        All Categories
      </h2>

      <p className="text-gray-500 mb-8">
        Choose a category from the sidebar to filter recipes.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">

        {Recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}

      </div>

    </div>
  );
}

export default CategoryIndex;