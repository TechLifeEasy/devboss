const { ProjectModal } = require('../connections/Schema');

// title: String,
//     description: String,
//     tech: String,
//     demoLink: String,
//     upVote: [String],
//     comment: [CommentSchema],
//     creator: String,
//     state:String,
//     isIdea:Boolean

const Projects=async(req,res)=>{
    const data=await ProjectModal.find();
    console.log(data);
    res.status(200).send(data);
}

const AddProject=async(req,res)=>
{
    try{
        const data=await req.body;
        console.log(data);
        const instance=await new ProjectModal(data);
        const resp=await instance.save();
        if (resp) {
            res.status(200).send("Added Project")
        }else{
            res.status(404).send("Some Problem Occurred");
        }
    }
    catch(e){
            res.status(404).send(e.message);
    }
}
exports.Projects=Projects;
exports.AddProject=AddProject;