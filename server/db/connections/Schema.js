require('dotenv').config();
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    bio: String,
    image: String,
    email: String,
    password: String,
    github: String,
    twitter: String,
    linkedin: String,
    discord: String,
}, { versionKey: false, timestamps: true });

var CommentSchema = new Schema({
    name:String,
    commentLike:[String],
}, { versionKey: false, timestamps: true });


const ProjectSchema = new Schema({
    title: String,
    description: String,
    demoLink: String,
    upVote: [String],
    comment: [CommentSchema],
    creator: String,
    state:String,
}, { versionKey: false, timestamps: true });






const FindSchema = new Schema({
    title: String,
    description: String,
    link: String,
    creator: String,
    state:String,
    type:String,
}, { versionKey: false, timestamps: true });



const SourceSchema = new Schema({
    title: String,
    description: String,
    blogLinks: [String],
    courseLink: [String],
    upVote: [String],
    comment: [CommentSchema],
    creator: String,
}, { versionKey: false, timestamps: true });





exports.UserModal = mongoose.model('devBoss.UserModal', UserSchema);
exports.ProjectModal = mongoose.model('devBoss.ProjectModal', ProjectSchema);
exports.CommentModal = mongoose.model('devBoss.CommentModal', CommentSchema);
exports.FindModal = mongoose.model('devBoss.IdeaModal', FindSchema);
exports.SourceModal = mongoose.model('devBoss.SourceModal', SourceSchema);


