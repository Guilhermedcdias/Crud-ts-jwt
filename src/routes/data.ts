import { Router } from "express";
import Data from "../controllers/Data";
// trazendo middlewares
import { authAdmin } from "../middlewares/index";
const routes = Router();
routes.get('/day', Data.dia);
routes.get('/month', Data.mes);
routes.get('/year', authAdmin, Data.ano);
export default routes;