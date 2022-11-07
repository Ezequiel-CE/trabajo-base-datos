import model from '../models/index.js';

export const getTramites = async (req, res) => {
  try {
    const tramites = await model.Tramite.findAll();

    res.status(200).json({ mensaje: 'listo de tramites', tramites });
  } catch (error) {
    res.status(400).send('error endpoint ');
  }
};

export const getTramite = async (req, res) => {
  const { id } = req.params;
  try {
    const tramite = await model.Tramite.findOne({ where: { id } });

    if (tramite) {
      return res.status(200).json({ mensaje: 'tramite encontrado', tramite });
    }

    return res.status(200).json({ mensaje: 'no se encontro a el tramite' });
  } catch (error) {
    return res.status(400).send('error al buscar persona');
  }
};

export const postTramite = async (req, res) => {
  try {
    await model.Tramite.create(req.body);

    res.status(200).json({ mensaje: 'se creo la tramite' });
  } catch (error) {
    res.status(400).send('tramite ya existe');
  }
};

export const patchTramite = async (req, res) => {
  const { id } = req.params;
  try {
    const tramite = await model.Tramite.update(
      { ...req.body },
      {
        where: {
          id,
        },
      },
    );

    if (!tramite[0]) {
      return res.status(200).json({ mensaje: 'tramite no existe' });
    }

    return res.status(200).json({ mensaje: 'se edito tramite con exito' });
  } catch (error) {
    return res.status(400).send('no se puedo editar el tramite');
  }
};

export const deleteTramite = async (req, res) => {
  const { id } = req.params;

  try {
    const tramite = await model.Tramite.destroy({
      where: {
        id,
      },
    });

    if (!tramite) {
      return res.status(200).json({ mensaje: 'tramite no existe' });
    }

    return res.status(200).json({ mensaje: 'se borro el tramite' });
  } catch (error) {
    return res.status(40).send('error al borrar tramite');
  }
};
