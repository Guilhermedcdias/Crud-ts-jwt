import { Router, Request, Response } from "express";
import matematica from './matematica';
import login from '../controllers/Login';
import data from './data';
import { authorization } from "../middlewares";

const routes = Router();
routes.post('/login', login);
routes.use("/data", authorization, data);
routes.use("/matematica", matematica);
// underscore atua como um espaço reservado para um argumento que desejamos ignorar
routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;
