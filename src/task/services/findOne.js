import models from '../../../models';

export default function (req, res, next) {
  return models.Task
    .findOne().then(task => {
      res.send(task);
    }).catch(err => {
      next(err);
    });
}
