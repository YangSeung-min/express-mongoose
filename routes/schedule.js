const router = require("express").Router();
const Schedule = require("../models/schedule");

// swagger
// parameters:
//   - in: query
//     name: category
//     required: false
//     schema:
//       type: integer
//       description: 카테고리

// Find All
/**
 * @swagger
 *  /schedule:
 *    get:
 *      tags:
 *      - product
 *      description: 모든 제품 조회
 *      produces:
 *      - application/json
 *      responses:
 *       200:
 *        description: 제품 조회 성공
 */
router.get("/", (req, res) => {
  Schedule.findAll()
    .then((schedule) => {
      if (!schedule.length)
        return res.status(404).send({ err: "Schedule not found" });
      res.send(schedule);
    })
    .catch((err) => res.status(500).send(err));
});

// Find One by scheduleId

router.get("/scheduleId/:scheduleId", (req, res) => {
  Schedule.findOneById(req.params.scheduleId)
    .then((schedule) => {
      if (!schedule) return res.status(404).send({ err: "Schedule not found" });
      res.send(schedule);
    })
    .catch((err) => res.status(500).send(err));
});

// Create new schedule document
/**
 * @swagger
 *  /schedule:
 *    post:
 *      tags:
 *      - product
 *      description: 모든 제품 조회
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: category
 *          required: false
 *          schema:
 *            type: integer
 *            description: 카테고리
 *      responses:
 *       200:
 *        description: 제품 조회 성공
 */
router.post("/", (req, res) => {
  Schedule.create(req.body)
    .then((schedule) => res.send(schedule))
    .catch((err) => res.status(500).send(err));
});

// updateByTodoid
router.put("/scheduleId/:scheduleId", (req, res) => {
  Schedule.updateByTodoid(req.params.scheduleId, req.body)
    .then((schedule) => res.send(schedule))
    .catch((err) => res.status(500).send(err));
});

// Delete by scheduleId
router.delete("/scheduleId/:scheduleId", (req, res) => {
  Schedule.deleteById(req.params.scheduleId)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
