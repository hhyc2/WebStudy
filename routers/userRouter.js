import express from "express";
import routes from "../routes";
import {
  handleuser,
  handleuser_id,
  handleuser_id_changepw,
  handleuser_id_edit
} from "../controllers/uesrControllers";

const userRouter = express.Router();

userRouter.get(routes.user, handleuser);
userRouter.get(routes.user_id, handleuser_id);
userRouter.get(routes.user_id_changepw, handleuser_id_changepw);
userRouter.get(routes.user_id_edit, handleuser_id_edit);

export default userRouter;
