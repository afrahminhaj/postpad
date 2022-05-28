import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";
export const getPosts = (req, res) => {
    PostMessage.find({}, (err, posts) => {
        if (!err) {
            console.log(posts);
            res.send(posts);
        } else {
            res.send(err);
        }
    });
};

export const createPosts = (req, res) => {
    const post = req.body;
    const newPost = PostMessage(post);
    newPost.save((err) => {
        if (!err) {
            res.send(post);
        } else {
            res.send(err);
        }
    });
};

export const updatePost = (req, res) => {
    const { id } = req.params;
    //console.log(id, "request made", req.body)
    const updatedValues = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No post with that id");
    }

    PostMessage.findByIdAndUpdate(id, updatedValues, (err, updatedPost) => {
        if (!err) {
            console.log(updatedValues, updatedPost)
            res.send(updatedPost);
        } else {
            res.send(err);
        }
    });
};