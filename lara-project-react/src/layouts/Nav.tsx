import { Link } from "react-router/internal/react-server-client"


function Nav() {
    return (
        <>
            <nav className="flex justify-center bg-[#F8F9D7] items-center gap-4 py-4">

                <Link to="/home" className="text-gray-700 hover:text-blue-600 hover:text-width-4 transition duration-200 font-bold p-4">Home</Link>
                <span> | </span>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 hover:underline transition duration-200 font-bold p-4">About</Link>
                <span> | </span>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 hover:underline transition duration-200 font-bold p-4">Contact</Link>
                <span> | </span>
                <Link to="/users" className="text-gray-700 hover:text-blue-600 hover:underline transition duration-200 font-bold p-4">Users</Link>
            </nav>
        </>
    )
}
export default Nav