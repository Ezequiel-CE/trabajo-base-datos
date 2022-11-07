import Persona from './persona.model.js';
import Tramite from './tramite.model.js';
import TipoTramite from './tipo-tramite.model.js';

Persona.hasMany(Tramite, { as: 'tramites' });
Tramite.belongsTo(Persona, {
  as: 'persona',
});

TipoTramite.hasMany(Tramite, { as: 'tramites' });
Tramite.belongsTo(TipoTramite, { as: 'tipo' });

const model = { Persona, Tramite, TipoTramite };

export default model;
