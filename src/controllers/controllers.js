import { Session } from '../models/models';

const postHandler = async(req, res) => {
    try {
        const {id, isActive} = req.body;
        await Session.create({id, isActive});

        res.json({ message: "New Session Created"});
    } catch (error) {
        throw new Error("Error Creating New Session")
    }
}




export { postHandler}