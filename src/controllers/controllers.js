import { Session } from '../models/models.js';

export const deleteSession = async (req, res) => {
    const { id } = req.params;

    try {
        const session = await Session.findByIdAndDelete(id);

        if (!session) {
            return res.status(404).json({ message: "Session not found"});
        }
        res.status(200).json({ message: "Session deleted successfully" });
    } catch {
        res.status(500).json({ message: "Error deleting session", error });
    } 
};