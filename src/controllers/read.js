import { Session } from '../models/models';

export const getHandler = async (req, res) => {
    const sessionId = req.params.id; 

    const session = await Session.findById(sessionId).exec();
    const now = new Date.now();

    return res.json({
        session, 
        timestamp: now
    })
}