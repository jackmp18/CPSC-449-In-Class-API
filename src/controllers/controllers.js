

export const updateHandler = async (req, res) => {
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