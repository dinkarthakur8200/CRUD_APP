import mongoose from "mongoose"; 


const userSchema = new mongoose.Schema({
    fname :{
        type : string,
        require : true
    },
    lname :{
        type : string,
        require : true
    },
    email :{
        type : string,
        require : true
    },
    password :{
        type : string,
        require : true
    }
});

export default mongoose.Models("User", userSchema);