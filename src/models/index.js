import Persona from './persona.model.js';
import Tramite from './tramite.model.js';

Persona.hasMany(Tramite, { as: 'tramites' });
Tramite.belongsTo(Persona, {
  as: 'persona',
});

const model = { Persona, Tramite };

export default model;
