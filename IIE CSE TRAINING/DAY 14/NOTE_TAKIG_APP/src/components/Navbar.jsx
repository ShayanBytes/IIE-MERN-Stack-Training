import { Link } from "react-router";

const Navbar = () => (
  <nav className="bg-blue-700 text-white px-4 py-2">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-x1 font-bold">NOTES APP</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/add">Create Here</Link>
        <span>Home</span>
      </div>
    </div>
  </nav>
);

export default Navbar;
