import models from '../../../models';

export default function (req, res, next) {
  return models.Task.update({
    description: req.body.description,
    assigned_to: req.body.assigned_to,
  }, {
    where : {
      id: req.params.id,
    }
  }).then(task => {
    res.send(task);
  }).catch(err => {
    next(err);
  });
}
