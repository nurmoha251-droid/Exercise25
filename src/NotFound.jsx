import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-8xl font-bold text-orange-500">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-5">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-3">
        Sorry, the page you are looking for does not exist.
      </p>

      <div className="flex gap-4 mt-8">

        <button
          onClick={() => navigate(-1)}
          className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg"
        >
          Go Back
        </button>

        <Link
          to="/"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg"
        >
          Go Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;