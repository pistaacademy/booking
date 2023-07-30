import DashboardNav from "../components/DashbaordNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomeOutlined } from "@ant-design/icons";


const DashboardSeller = () => {

    const { auth } = useSelector((state) => ({ ...state }));

    const connected = () => {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <h2>Your Hotels</h2>
                    </div>
                    <div className="col-md-2">
                        <Link to="/hotels/new" className="btn btn-primary">
                            + Add New
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const notConnected = () => {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <div className="p-5 pointer">
                            <HomeOutlined className="h1" />
                            <h4>Setup payouts to post hotel rooms</h4>
                            <p className="lead">
                                Booking partners with stripe to transfer eranings to your bank account
                            </p>
                            <button className="btn btn-primary mb-3">Setup Payouts</button>
                            <p className="text-muted">
                                <small>
                                    You'll be redirected to Stripe to complete the onboarding process.
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="container-fluid bg-secondary p-5">
                <ConnectNav />
            </div>
            <div className="container-fluid p-4">
                <DashboardNav />
            </div>

            {
                auth &&
                auth.user &&
                auth.user.stripe_seller &&
                auth.user.stripe_seller.charges_anabled
                    ? connected()
                    : notConnected()
            }
            
            {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
        </>
    )
}

export default DashboardSeller;