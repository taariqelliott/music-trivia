
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <div style={{
                display: "flex",
                columnGap: "150px",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
            </div>
        </div>
    )
}
