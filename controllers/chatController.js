const Chat = require('./../models/Chat');


module.exports = {

    getChatAll: (req, res) => {

        Chat.find({}, (err, messages) => {
            return res.status(200).json(messages);
        })

    },

    saveChat: (req, res) => {
        console.log(req.body);
        let { name, message } = req.body;

        let chat = new Chat({
            name,
            message
        });
        chat.save().then((chat) => {

            // io.emit('message', {
            //     name,
            //     message
            // });
            return res.status(200).json({
                chat,
                message: 'Chat saved successfully',
                success: true
            })
        }).catch((error) => {
            console.log(error);
            return res.status(400).json({
                chat,
                message: 'Chat saved failed',
                success: false
            })
        });

    }
}