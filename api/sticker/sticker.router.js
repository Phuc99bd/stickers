const router = require("express").Router()
const sticker = require("./sticker.controller")

router
    .get("/",sticker.getAll)

    .get("/:id",sticker.findId)

    .post("/create",sticker.createSticker)

    .put("/update/:id",sticker.updateSticker)

    .delete("/delete/:id",sticker.deleteSticker)

module.exports = router