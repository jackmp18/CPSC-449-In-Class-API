import { Session } from '../models/index.js';

const getHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const session = await Session.findOne({id: id}).exec();

        return res.json({
            session: {
                id: session.id, 
                isActive: session.isActive
            }
        })
    } catch (error) {
        console.log(error);
        throw new Error("Error Getting Session")
    }
}

const postHandler = async (req, res) => {
    try {
        const {id, isActive} = req.body;

        const newSession = new Session({
            id, 
            isActive
        })
        newSession.save();

        res.json({ message: "New Session Created"});
    } catch (error) {
        console.log(error);
        throw new Error("Error Creating New Session")
    }
}

const updateHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body; 
        const newSession = await Session.findOneAndUpdate({id: id}, { $set: { isActive: isActive}});

        res.json({
            message: "Updated Successfully",
        })
    } catch (error) {
        console.log(error);
        throw new Error("Error Updating Session")
    }
}

const deleteHandler = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedSession = await Session.findOneAndDelete({id: id});

        return res.json({message: "Successfully Deleted Session"})
    } catch (error) {
        console.log(error);
        throw new Error("Error Deleting Session")
    }
}

export { getHandler, postHandler, updateHandler, deleteHandler}
