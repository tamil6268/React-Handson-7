import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div id="container">
            <Link id="one" to="/Home">Home</Link>
            <Link id="one" to="/Student">Students</Link>
            <Link id="one" to="/ContactUs">Contact-Us</Link>
        </div>
    )
}
export default Nav;