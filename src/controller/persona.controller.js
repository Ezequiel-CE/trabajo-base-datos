import model from '../models/index.js';

export const getPersonas = async (req, res) => {
  try {
    const personas = await model.Persona.findAll();

    res.status(200).json({ mensaje: 'listo de personas', personas });
  } catch (error) {
    res.status(400).send('error endpoint ');
  }
};

export const getPersona = async (req, res) => {
  const { id } = req.params;
  try {
    const persona = await model.Persona.findOne({ where: { id_persona: id } });

    if (persona) {
      return res.status(200).json({ mensaje: 'persona', persona });
    }

    return res.status(200).json({ mensaje: 'no se encontro a la persona' });
  } catch (error) {
    return res.status(400).send('error al buscar persona');
  }
};

export const postPersonas = async (req, res) => {
  try {
    await model.Persona.create(req.body);

    res.status(200).json({ mensaje: 'se creo la persona' });
  } catch (error) {
    res.status(400).send('persona ya existe');
  }
};

export const patchPersonas = async (req, res) => {
  const { id } = req.params;
  try {
    const persona = await model.Persona.update(
      { ...req.body },
      {
        where: {
          id_persona: id,
        },
      },
    );

    if (!persona[0]) {
      return res.status(200).json({ mensaje: 'persona no existe' });
    }

    return res.status(200).json({ mensaje: 'se edito la persona' });
  } catch (error) {
    return res.status(400).send('no se puedo editar a la persona');
  }
};

export const deletePersonas = async (req, res) => {
  const { id } = req.params;

  try {
    const persona = await model.Persona.destroy({
      where: {
        id_persona: id,
      },
    });

    if (!persona) {
      return res.status(200).json({ mensaje: 'persona no existe' });
    }

    return res.status(200).json({ mensaje: 'se borro la persona' });
  } catch (error) {
    return res.status(40).send('error al borrar persona');
  }
};
