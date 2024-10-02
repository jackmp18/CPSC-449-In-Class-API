import { Session } from "../models/models";

const updateHandler = async (request, response) => {
    try{
    const {userId} = request.params;

    const newSession = await Session.findByIdAndUpdate(id, { $set: { isActive: false}})


    response.status(200).json({
        message: "Updated successfully",
      });


} catch(err) {
    throw new Error("Error Updating Session");
}};

export default updateHandler;