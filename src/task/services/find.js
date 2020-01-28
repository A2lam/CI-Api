import models from "../../../models";

export default function (req, res, next) {
  return models.Task
    .findAll()
    .then(tasks => {
      res.send(tasks)
    })
    .catch(err => {
      next(err);
    });
}
