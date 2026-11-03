import { useParams, Link } from "react-router-dom";
import { Recipes, categories } from "./recipes";
import RecipeCard from "./RecipeCard";

function CategoryDetails() {
  const { categoryId } = useParams();

  const category = categories.find(
    (item) => item.id === categoryId
  );

  if (!category) {
    return (
      <div>
        <h2 className="text-2xl font-bold">
          Category Not Found
        </h2>

        <Link
          to="/categories"
          className="text-orange-500 mt-4 inline-block"
        >
          View All Categories
        </Link>
      </div>
    );
  }

  const filteredRecipes = Recipes.filter(
    (recipe) => recipe.category === categoryId
  );

  return (
    <div>

      <h2 className="text-3xl font-bold mb-3">
        {category.icon} {category.name} Recipes
      </h2>

      <p className="text-gray-500 mb-8">
        Explore our {category.name.toLowerCase()} recipes.
      </p>

      {filteredRecipes.length === 0 ? (
        <p>No recipes found in this category.</p>
      ) : (

        <div className="grid sm:grid-cols-2 gap-6">

          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}

        </div>

      )}

    </div>
  );
}

export default CategoryDetails;