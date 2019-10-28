import express from 'express';
import routes from './routes';
import './database';

class App {
    constructor() {
        this.conexao = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        //  permitir a aplicação fazer req e res em formato de JSON
        this.conexao.use(express.json());
    }

    routes() {
        //  buscamos as rotas de um arquivo externo
        this.conexao.use(routes);
    }
}

export default new App().conexao;
