export const showMessage = (req, res)=> {
    res.status(200).send(`This is your message: ${req.params.message}`);
}

export const register = (req, res) => {
    console.log(req.body)
}