require('dotenv').config();
const mongoose =require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name:  String, 
  title: String,
  img:'String',
  url:   String,
  like:Number,
  topic:String,
  creator:String,
  summery:String,

},{ versionKey: false,timestamps: true });


const ProjectSchema=new Schema({
    name:  String, 
    title: String,
    img:'String',
    url:   String,
    like:Number,
    topic:String,
    creator:String,
    summery:String,
  
},{ versionKey: false,timestamps: true });


const CommentSchema=new Schema({
    name:  String, 
    title: String,
    img:'String',
    url:   String,
    like:Number,
    topic:String,
    creator:String,
    summery:String,
  
},{ versionKey: false,timestamps: true });



const IdeaSchema=new Schema({
    name:  String, 
    title: String,
    img:'String',
    url:   String,
    like:Number,
    topic:String,
    creator:String,
    summery:String,
  
},{ versionKey: false,timestamps: true });



const SourceSchema=new Schema({
    name:  String, 
    title: String,
    img:'String',
    url:   String,
    like:Number,
    topic:String,
    creator:String,
    summery:String,
  
},{ versionKey: false,timestamps: true });

const User = new Schema({
  username:{type:String},
  email: {type: String}, 
  LikePage:{type: [String]},
  url:{type: String},
  About:{type:String},
  isCreator:{type:Boolean}
},{ versionKey: false,timestamps: true });




const BlogInfo=mongoose.model('devBoss.some', Blog);
const UserInfo=mongoose.model('devBoss', User);



exports.BlogInfo = BlogInfo;
exports.UserInfo = UserInfo;
