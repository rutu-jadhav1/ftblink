import User from "../models/User.js";

const PostRegister = async (req,res) => {
    const { fullName, email, password, dob, profession } = req.body

    const user = new User({
        fullName,
        email,
        password, 
        dob : new Date(dob),
        profession
    })

    try{
        const savedUser = await user.save();

        res.json({
            success : true,
            data : savedUser,
            message : 'Registered successfully !'
        })
    }
    catch(e){
        res.json({
            success : false,
            data : null,
            message : e.message,
        })
    }

}

export {PostRegister};