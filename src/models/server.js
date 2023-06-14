const cors = require('cors');
const express = require('express');

const {conexionDB} = require('../config/db');

class Server {
    constructor(){
        this.app = express();
        this.port = 4000;

        this.paths = {
            auth: '/api/auth',
            ejercicios: '/api/ejercicios',
            musculos: '/api/musculos',
            gruposMusculares: '/api/grupos-musculares',
            entrenamientos: '/api/entrenamientos',
            clientes: '/api/clientes',
        }

        //Conexion a DB
        this.conectarDB();
        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
    }

    async conectarDB(){
        await conexionDB();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.paths.auth, require('../routes/auth/auth.routes'));
        this.app.use(this.paths.ejercicios, require('../routes/ejericio/ejercicio.routes'));
        this.app.use(this.paths.musculos, require('../routes/musculo/musculo.routes'));
        this.app.use(this.paths.gruposMusculares, require('../routes/grupoMuscular/grupoMuscular.routes'));
        this.app.use(this.paths.entrenamientos, require('../routes/entrenamiento/entrenamiento.routes'));
        this.app.use(this.paths.clientes, require('../routes/cliente/cliente.routes'));
    }

    listen(){
        const host = '0.0.0.0';
        this.app.listen(process.env.PORT || this.port, host, () => {
            console.log(`Servidor escuchando el puerto ${this.port}`);
        })
    }
}

module.exports = Server;