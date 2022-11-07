import sequelize, { DataTypes } from 'sequelize';
import db from '../cfg/database.js';

const Tramite = db.define(
  'Tramite',
  {
    id_tramite: {
      field: 'id_tramite',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: { field: 'descripcion', type: DataTypes.STRING(60) },
    apellido: { field: 'apellido', type: DataTypes.STRING(60) },
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
    telefono: { field: 'telefono', type: DataTypes.STRING(60) },
    tipo_tramite: { field: 'tipo_tramite', type: DataTypes.STRING(60) },
    id_persona: { field: 'id_persona', type: DataTypes.INTEGER },
  },
  { tableName: 'tramite', timestamps: false },
);
export default Tramite;
