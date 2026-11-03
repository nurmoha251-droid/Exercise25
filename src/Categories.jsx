import { Outlet } from "react-router-dom";
import CategorySidebar from "./CategorySidebar";

function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-10">
        Recipe Categories
      </h1>

      <div className="grid md:grid-cols-4 gap-8">

        <div>
          <CategorySidebar />
        </div>

        <div className="md:col-span-3">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default Categories;