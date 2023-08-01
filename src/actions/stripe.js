import axios from "axios";

export const createConnectAccount  = async (token) => {
    return (
        await axios.post(`${process.env.REACT_APP_API}/create-connect-account`, {},{
            header: {
                Autorization: `Bearer ${token}`,
            }
        })
    )
}