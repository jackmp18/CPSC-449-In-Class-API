import {Session} from '../models/models';

const getHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const session = await Session.findById(id).exec();
        const now = new Date.now();

        return res.json({
            session: {
                id: session.id, 
                isActive: session.isActive
            },
            timestamp: now
        })
    } catch (error) {
        throw new Error("Error Getting Session")
    }
}

const postHandler = async (req, res) => {
    try {
        const {id, isActive} = req.body;
        await Session.create({id, isActive});

        res.json({ message: "New Session Created"});
    } catch (error) {
        throw new Error("Error Creating New Session")
    }
}

const updateHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const newSession = await Session.findByIdAndUpdate(id, { $set: { isActive: false}});

        res.json({
            message: "Updated Successfully",
        })
    } catch (error) {
        throw new Error("Error Updating Session")
    }
}

export { getHandler, postHandler, updateHandler}
