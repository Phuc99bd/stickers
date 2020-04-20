const queries = require("../../db/queries");
module.exports.getAll = () => {
    return new Promise((resolve,reject)=>{
        try{
            queries.getAll().then(stickers=>{
                resolve(stickers)
            });
        }catch(err){
            reject(err);
        }
    })
}

module.exports.createSticker = (sticker) => {
    return new Promise((resolve,reject)=>{
        try{
            queries.create(sticker).then(data=>{
                resolve(data)
            })
        }catch(err){
            reject(err);
        }
    })
}

module.exports.updateSticker = (id,sticker) => {
    return new Promise((resolve,reject)=>{
        try{
            queries.update(id,sticker).then(data=>{
                resolve(data);
            })
        }catch(err){
            reject(err)
        }
    })
}

module.exports.deleteSticker = (id)=>{
    return new Promise((resolve,reject)=>{
        try{
            queries.delete(id).then(data=>{
                resolve(data);
            })
        }catch(err){
            reject(err);
        }
    })
}

module.exports.findId = (id) => {
    return new Promise((resolve,reject)=>{
        try{
            queries.getById(id).then(data=>{
                resolve(data);
            })
        }catch(err){
            reject(err);
        }
    })
}