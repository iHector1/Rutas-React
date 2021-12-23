import { Link } from 'react-router-dom'

const HomePage = () => {
    const userid = 10
    return (
        <div>
            <h1>aplications</h1>
            <Link to={`/users/${userid}`}>Users</Link>
        </div>
    )
}
export default HomePage