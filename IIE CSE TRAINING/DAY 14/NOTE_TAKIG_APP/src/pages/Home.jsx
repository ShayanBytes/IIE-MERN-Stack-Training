import { Link } from "react-router-dom";
import Button from "../components/Button";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-16">
      <div className="max-w-xl">
        <div className="text-6xl mb-6"></div>
        <h1 className="text-3xl font-bold mb-4">🩻Welcome to Notes App</h1>
        <p className="text-gray-600 text-lg mb-6">
          Quickly create, edit, and manage your notes – all in one place.
          Simple, fast, and stored in your browser.
        </p>
        <Link to="/Notes">
          <Button text="View my notes" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
