import models from '../../../models';

export default function (req, res, next) {
  return models.Task.create({
    description: req.body.description,
    assigned_to: req.body.assigned_to,
  }).then(task => {
    res.send(task);
  }).catch(err => {
    next(err);
  });
}
