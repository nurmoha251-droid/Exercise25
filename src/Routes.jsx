
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Recipes from "./recipes";
import RecipeDetails from "./RecipeDetails";
import Categories from "./Categories";
import CategoryIndex from "./CategoryIndex";
import CategoryDetails from "./CategoryDetails";
import NotFound from "./NotFound";

function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Recipes */}
      <Route path="/Recipes" element={<Recipes />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />

      {/* Nested Categories */}
      <Route path="/categories" element={<Categories />}>
        <Route index element={<CategoryIndex />} />
        <Route path=":categoryId" element={<CategoryDetails />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
