export const showMessage = (req, res)=> {
    res.status(200).send(`This is your message: ${req.params.message}`);
}