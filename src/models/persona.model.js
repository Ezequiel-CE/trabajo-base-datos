import { DataTypes } from 'sequelize';
import db from '../cfg/database.js';

const Persona = db.define(
  'Persona',
  {
    id_persona: {
      field: 'id_persona',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: { field: 'nombre', type: DataTypes.STRING(60) },
    apellido: { field: 'apellido', type: DataTypes.STRING(60) },
    dni: { field: 'dni', type: DataTypes.INTEGER(60), unique: true },
    fecha_nacimiento: { field: 'fecha_nacimiento', type: DataTypes.DATEONLY() },
    email: { field: 'email', type: DataTypes.STRING(60) },
    telefono: { field: 'telefono', type: DataTypes.STRING(60) },
  },
  { tableName: 'persona', timestamps: false },
);
export default Persona;
