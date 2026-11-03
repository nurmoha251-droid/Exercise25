import { Link, useNavigate, useParams } from "react-router-dom";
import { Recipes } from "./recipes";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = Recipes.find((item) => item.id === id);

  if (!recipe) {
    return (
      <div className="text-center py-24">
        <h1 className="text-3xl font-bold">Recipe Not Found</h1>

        <Link
          to="/recipes"
          className="text-orange-500 mt-5 inline-block"
        >
          Back to Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <button
        onClick={() => navigate(-1)}
        className="text-orange-500 mb-6 font-semibold"
      >
        ← Go Back
      </button>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-96 object-cover rounded-2xl"
      />

      <h1 className="text-4xl font-bold mt-8">
        {recipe.title}
      </h1>

      <p className="text-gray-500 mt-3">
        {recipe.description}
      </p>

      <div className="flex gap-6 mt-5 text-gray-600 flex-wrap">

        <span>⏱ {recipe.cookingTime}</span>

        <span>📊 {recipe.difficulty}</span>

        <span className="capitalize">🍴 {recipe.category}</span>

      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-12">

        <section>
          <h2 className="text-2xl font-bold mb-5">
            Ingredients
          </h2>

          <ul className="space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="bg-orange-50 p-3 rounded-lg">
                ✓ {ingredient}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-5">
            Instructions
          </h2>

          <ol className="space-y-4">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  {index + 1}
                </span>

                <p className="text-gray-600">{step}</p>
              </li>
            ))}
          </ol>
        </section>

      </div>

    </div>
  );
}

export default RecipeDetails;