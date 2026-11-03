import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Recipes", path: "/Recipes" },
    { name: "Categories", path: "/categories" }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <NavLink to="/" className="text-2xl font-bold text-orange-500">
          🍴 FoodRecipe
        </NavLink>

        <div className="flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold"
                  : "text-gray-600 hover:text-orange-500"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;