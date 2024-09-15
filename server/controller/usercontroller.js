import User from "..Models/userModel.js"

 
// For the creating a element in the crud app...
export const create = async (req, res) => {
    try {
      const userData = new User(req.body);
  
      if (!userData) {
        return res.status(404).json({ msg: "User data not found" });
      }
  
      const savedData = await userData.save();
      res.status(200).json(savedData);
    } catch (error) {
      // Handle errors here
      console.error(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  };

  // for the getting the whole data...


  export const getAll = async(req,res)=>{
    try{
      const userData =  await User.find();
      if(!userData){
        return res.status(404).json({msg : "User data not found"});
      }res.status(200).json(userData);
    }
    catch(error){
       res.status(500).json({error:error});
    }
  }

  // For the getting the single data....

  export const getOne = async(req,res)=>{
    try{
      const id = req.params.id ;
      const userExist = await User.findByid(id);
      if(!userExist){
        return res.status(404).json({msg:"User not found"});
      }
      res.status(200).json(userExist);
    }
    catch(error){
      res.status(500).json({error:error});
    }
  }

  // For the updating the data....

  export const update = async(req,res)=> {
    try{
      const id = req.params.id;
      const userExist =  await User.findByid(id);
      if(!userExist){
        return res.status(401).json({msg:"User not found"});
      }
      const updatedData = await User.findByIdAndUpdate(id,req.body,{new :true});
      res.status(200).json(msg:"User UpdaTED SUCCESFULLY");
    }
    catch(error){
      res.status(500).json({error:error});
    }
  }

  // For the deleting the data of user...
  // IN the simple terms .. If a user wants to delete their 
  // data we need to crete a extances for the deleteing ...
  export const deleteUser = async(req , res)=>{
    try{
      const id = req.params.id;
      const userExist = await User.findByid(id);
      if(!userExist){
        return res.status(401).json({msg:"User not Exist"});
      }
      await User.findByIdAndUpdate(id);
      res.status(200).json({msg:"User Deleted Succesfully!"});
    }
    catch(error){
      res.status(500).json({error:error});
    }
  } 