const  model  =require('../model/model')



const createOrganisation = async(req, res)=> {
    try {
        let data = req.body

        if (!data) {
            return res.status(400).send({ status: false, msg: "Details must be provided" });
        }

        let { organisation, property, region, crop , cropName , cropCycle} = data // destructuring

        if(!(organisation || property || region || crop || cropName || cropCycle )){
            return res.status(400).send({ status: false, msg: "enter all details" });
        }

        //-------userCreation
        let created = await model.create(data)
        return res.status(201).send({ status: true, msg: " created successfully", data: created })
    }
    catch (err) {
      return res.status(500).send({ status: false, msg: err.message })
    }
}

const getOrganisation =async(req, res)=>{
    try {
        let data = await model.find();
        return res.status(200).send({status:true , data:data})
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

module.exports ={createOrganisation , getOrganisation}