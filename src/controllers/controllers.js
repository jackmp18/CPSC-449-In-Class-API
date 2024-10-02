import {Session} from '../models/models';


export const getHandler = async (req, res) => {
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