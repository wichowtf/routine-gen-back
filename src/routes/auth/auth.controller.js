const {generateJWT} = require('../../helpers/generateJWT');

const login = async (req, res) => {
    const {email, password} = req.body;

    console.log(req.body)
    console.log(process.env.AUTH_USERS.split(', ')[0])
    console.log(process.env.AUTH_PASS.split(', ')[0])
    try {
        //Verificar si el email existe
        
        if(email !== process.env.AUTH_USERS.split(', ')[0] || password !== process.env.AUTH_PASS.split(', ')[0] ){
            return res.status(401).json({
                msg: 'El email o contraseña son incorrectos'
            })
        }

        const id = Date.now();

        const user = {
            id,
            email, 
            password
        }


        //Generar el JWT
        const token = await generateJWT(id);

        return res.status(200).json({
            user,
            token
        })    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Something went wrong'
        })
    }

    
}


module.exports = { login }