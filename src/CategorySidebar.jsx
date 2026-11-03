import { NavLink } from "react-router-dom";
import { categories,Recipes } from "./recipes";

function CategorySidebar() {
  return (
    <aside className="bg-white p-6 rounded-xl shadow-md h-fit">

      <h2 className="text-xl font-bold mb-5">
        Categories
      </h2>

      <div className="space-y-3">

        <NavLink
          to="/categories"
          end
          className={({ isActive }) =>
            `block p-3 rounded-lg ${
              isActive
                ? "bg-orange-500 text-white"
                : "hover:bg-orange-50 text-gray-700"
            }`
          }
        >
          All Categories
        </NavLink>

        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/categories/${category.id}`}
            className={({ isActive }) =>
              `block p-3 rounded-lg ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "hover:bg-orange-50 text-gray-700"
              }`
            }
          >
            {category.icon} {category.name}
          </NavLink>
        ))}

      </div>

    </aside>
  );
}

export default CategorySidebar;