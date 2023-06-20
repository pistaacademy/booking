import User from "../model/user";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const {name, email, password} = req.body;

    if(!name) return res.status(400).send("Name is Required");
    if(!password || password.length < 6) return res.status(400).send("Password is required and should be min 6 character long");

    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send('Email is taken');

    const user = new User(req.body);
    try{
        await user.save();
        console.log("User Created", user);
        return res.json({ ok: true });
    }
    catch (err) {
        console.log("Create User Failed", err);
        return res.status(400).send("Error. Try again.")
    }
}


export const login = async (req, res) => {
    const {email, password} = req.body;

    try{
        let user = await User.findOne({ email }).exec()
        if(!user) res.status(400).send("User with that email not found");

        user.comparePassword(password, (err, match)=> {
            if(!match || err) return res.status(400).send("Wrong Password");
            // Generate a token then send as response to client
            let token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET,{
                expiresIn: "3d",
            });
            res.json({ token, user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            } });
        })
    }
    catch (err){
        console.log("Login Error", err)
        res.status(400).send('Signin Failed')
    }
}