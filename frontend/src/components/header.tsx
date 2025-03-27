import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="bg-blue-800 py-6 ">
        <div className="container mx-auto flex justify-between">
          <span className="text-white text-3xlfont-bold tracking">
            <Link to="/">RoomRush</Link>
          </span>
          <span className="flex space-x-2">
            <Link
              to="/SignIn"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >Sign In
            </Link> 
          </span>
        </div>
      </div>
    );
};

    export default Header;