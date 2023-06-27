import { Link } from "react-router-dom";
import Users from './views/Users';
import Register from './Register';

const Admin = () => {
    return (
        <section>
            <h1>Admins Page</h1>
            <br />
            <Users />
			<Register />
            <br />
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Admin
