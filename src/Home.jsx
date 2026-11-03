import { Link } from "react-router-dom";

function Home() {
  const cards = [
    {
      title: "Explore Recipes",
      description: "Discover delicious recipes for every occasion.",
      path: "/recipes",
      icon: "🍲"
    },
    {
      title: "Browse Categories",
      description: "Find meals based on your favorite food categories.",
      path: "/categories",
      icon: "🍕"
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50">

      <section className="text-center py-24 px-6">

        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to FoodRecipe
        </h1>

        <p className="text-gray-600 mt-5 text-lg">
          Discover, cook and enjoy delicious meals every day.
        </p>

        <Link
          to="/recipes"
          className="inline-block mt-8 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600"
        >
          Explore Recipes
        </Link>

      </section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-20">

        {cards.map((card) => (
          <Link
            key={card.path}
            to={card.path}
            className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition text-center"
          >
            <div className="text-5xl">{card.icon}</div>

            <h2 className="text-2xl font-bold mt-5">
              {card.title}
            </h2>

            <p className="text-gray-500 mt-3">
              {card.description}
            </p>

            <span className="inline-block mt-5 text-orange-500 font-semibold">
              Explore →
            </span>
          </Link>
        ))}

      </section>

    </div>
  );
}

export default Home;