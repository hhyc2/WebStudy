import express from "express";
import {
  handlehome,
  handlelogin,
  handlelogout,
  handlejoin
} from "../controllers/globalControllers";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, handlehome);
globalRouter.get(routes.login, handlelogin);
globalRouter.get(routes.logout, handlelogout);
globalRouter.get(routes.join, handlejoin);

export default globalRouter;
