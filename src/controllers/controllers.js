const deleteHandler = async (req, res) => {

    try {
        const { id } = req.params;

        const deletedSession = await Session.findByIdAndDelete(id);

        return res.json({message: "Successfully Deleted Session"})
    } catch (error) {
        throw new Error("Error Deleting Session")
    }
   


}