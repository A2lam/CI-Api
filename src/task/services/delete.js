import models from '../../../models';

export default function (req, res, next) {
  return models.Task.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(res.send({ "return": "OK" }))
  .catch(err => next(err));
}