import Persona from './persona.model.js';
import Tramite from './tramite.model.js';

Persona.hasMany(Tramite);
Tramite.belongsTo(Persona);

const model = { Persona, Tramite };

export default model;
