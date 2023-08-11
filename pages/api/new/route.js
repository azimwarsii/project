import User from "@models/user";
import  {connectToDB} from "@utils/database";

export const GET = async (request) => {
    const { email , name , image} = await request.json();

    try{
        await connectToDB()

        const userExist = await User.findOne({
            email: email
        })

        if (!userExist){
            await User.create ({
                email: email,
                username: name.replace(/ /g, '').toLowerCase(),
                image: image,
            })
        }

        return true
    }catch(error){
        console.log(error)
        return false
    }
} 