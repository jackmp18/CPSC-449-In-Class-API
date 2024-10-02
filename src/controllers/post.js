//import express from "express";
//import {mongoose} from "mongoose";
import {Session} from "./model/model.js";

const postSession = async (req,res) => {
    try {
        const session = req.body;
        Session.create(session);
        // console.log('post request')
        res.json({status:"session added successfuly"});
        } catch(err) {
                console.log(err);               
        }

}

export default postSession;