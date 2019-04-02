const router = require("express").Router();

const {getChatAll, saveChat} = require('./../controllers/chatController');


//localhost:4000/chat
router.post('/', saveChat)


//localhost:3000/chat
router.get('/', getChatAll)


module.exports = router;