import DashboardNav from "../components/DashbaordNav";
import ConnectNav from "../components/ConnectNav";

const DashboardSeller = () => {
    return (
        <>
            <div className="container-fluid bg-secondary p-5">
                <ConnectNav />
            </div>
            <div className="container-fluid p-4">
                <DashboardNav />
            </div>
            <div className="container">
                <p>Show All Hotels</p>
            </div>
        </>
    )
}

export default DashboardSeller;