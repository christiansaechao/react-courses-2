// localhost:4000/inventory
// get route that returns information on an apple
// get route that returns information on a rotisserie chicken
// status code: 200 ok, 201 created post request, 203
// 400 internal server error, 401 unauthorized, 404 not found resource
import { Router } from "express";

const router = Router();
router.get("/fruit", (req, res) => {
  res.status(200).send({ Fruit: "apple" });
});

router.get("/chicken", (req, res) => {
  res.status(200).send({ chicken: "rotisserie chicken!" });
});

export default router;