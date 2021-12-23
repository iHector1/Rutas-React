import { useNavigate } from "react-router-dom"
const Dashboard = () => {
    const navigate = useNavigate()
    const handleDashboardClick = () => {
        navigate('/')
    }
    return (<div>
        <h1>Dashboard</h1>
        <button onClick={handleDashboardClick
        }>Logout</button>
    </div>)
}
export default Dashboard