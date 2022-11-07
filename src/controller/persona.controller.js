export const getPersonas = async (req, res) => {
  try {
    res.status(200).send('endpoint get personas');
  } catch (error) {
    res.status(400).send('error endpoint ');
  }
};

export const getPersona = async (req, res) => {
  try {
    res.status(200).send('endpoint get persona');
  } catch (error) {
    res.status(400).send('error endpoint ');
  }
};

export const postPersonas = async (req, res) => {
  try {
    res.status(200).send('endpoint post personas');
  } catch (error) {
    res.status(40).send('endpoint get personas');
  }
};

export const patchPersonas = async (req, res) => {
  try {
    res.status(200).send('endpoint patch personas');
  } catch (error) {
    res.status(40).send('endpoint get personas');
  }
};

export const deletePersonas = async (req, res) => {
  try {
    res.status(200).send('endpoint delete personas');
  } catch (error) {
    res.status(40).send('endpoint get personas');
  }
};
