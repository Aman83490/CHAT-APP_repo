const express= require("express")
//const {registerUser, authUser,allUsers} = require("../controllers/userControllers")
const {protect} = require("../middlewares/authMiddleware")
//const bodyParser =require("body-parser");
const {sendMessage,allMessages} = require("../controllers/messageControllers")


const router = express.Router()

router.route('/').post(protect,sendMessage)
router.route('/:chatId').get(protect,allMessages)

module.exports = router

