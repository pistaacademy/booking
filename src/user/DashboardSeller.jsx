import DashboardNav from "../components/DashbaordNav";

const DashboardSeller = () => {
    return (
        <>
            <div className="container-fluid bg-secondary p-5">
                <h1>Dashboard Seller</h1>
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