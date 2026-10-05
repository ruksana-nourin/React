import { Link } from "react-router/internal/react-server-client"


function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                
                <Link to="/home">Home</Link> 
                <span> | </span>
                <Link to="/about">About</Link>
                <span> | </span>
                <Link to="/contact">Contact </Link>
            </nav>
        </>
    )
}
export default Nav