import sequelize, { DataTypes } from 'sequelize';
import db from '../cfg/database.js';
import Persona from './persona.model.js';

const Tramite = db.define(
  'tramite',
  {
    id: {
      field: 'id_tramite',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: { field: 'descripcion', type: DataTypes.STRING(60) },
    fecha_alta: {
      field: 'fecha_alta',
      type: DataTypes.DATEONLY(),
      defaultValue: sequelize.NOW,
    },
    fecha_cierre: {
      field: 'fecha_cierre',
      type: DataTypes.DATEONLY(),
    },
    dni_persona: { field: 'dni_persona', type: DataTypes.INTEGER(60) },
    tipo_tramite: { field: 'tipo_tramite', type: DataTypes.STRING(60) },
    personaId: {
      field: 'id_persona',
      type: DataTypes.INTEGER,
      references: { model: Persona },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
  },
  { tableName: 'tramite', timestamps: false },
);
export default Tramite;
