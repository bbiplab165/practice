const path = require('path');
const userModel = require('../model/userModel')

exports.getAddProduct = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'pages', 'registration.html'))
};
exports.createUser = async (req, res) => {
    try {
        const { name, phoneNumber, email } = req.body;
        const newUser = await userModel.create({
            name,
            phoneNumber,
            email
        });
        console.log('User created:', newUser);
        // res.sendStatus(201);
        res.redirect('/');
    } catch (error) {
        console.error('Error creating user:', error);
        res.sendStatus(500);
    }    
}
