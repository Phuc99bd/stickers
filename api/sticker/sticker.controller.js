const { getAll,createSticker,deleteSticker,findId,updateSticker } = require("./sticker.service")

module.exports.getAll = async(req,res) => {
    try{
        let data = await getAll();
        res.json(data);
    }catch(err){
        res.json({error: err});
    }
    
}

module.exports.createSticker = async(req,res) => {
    try{
    let sticker = req.body;
    let data = await createSticker(sticker);
    res.json(data)
     }catch(err){
        res.json({error: err});
    }
}

module.exports.updateSticker = async(req,res) => {
    try{
    let { id } = req.params;
    let sticker = req.body;
    let data = await updateSticker(id,sticker)
    res.json(data);
    }catch(err){
        res.json({error: err});
    }
}

module.exports.deleteSticker = async(req,res) => {
    try{
    let { id } = req.params;
    let data = await deleteSticker(id);
    res.json(data);
    }catch(err){
        res.json({error: err});
    }
}

module.exports.findId = async(req,res) => {
    try{
        let {id} =req.params
        let data = await findId(id);
        res.json(data);
    }catch(err){
        res.json({error:err})
    }
}