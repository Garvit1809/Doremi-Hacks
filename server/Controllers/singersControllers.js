import express from 'express';

import Singers from '../models/userModel.js';

const router = express.Router();

export const getSingers = async(req,res) =>{
    try{
        const singer = await Singers.find();

        if(singer.role == 'singer'){
            res.send({
                name: singer.name,
                stagename: singer.stagename,
                tagline: singer.bio,
                twitter: singer.socials.twitter,
                linkedIn: singer.socials.linkedIn,
                github: singer.socials.github,
            })
        }
        res.sendFile(__dirname + '../../../client/views/singers.html')
    }catch (error) {
        res.status(404).json({ message: error.message });
    }
};