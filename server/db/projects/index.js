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
        let data={...req.body,creator:req.userName,state:'on'};
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

const DeleteProject=async(req,res)=>
{
    try{
        const data=await req.body;
        console.log(data);
        
        let resp=await ProjectModal.deleteOne({title:data.title});    
        if(resp){
            res.status(200).send("Project Successfully Deleted");
        }else{
            res.status(404).send("Some Error occurred while deleting");
        }
    }
    catch(e){
            res.status(404).send(e.message);
    }
}

exports.Projects=Projects;
exports.AddProject=AddProject;
exports.DeleteProject=DeleteProject;