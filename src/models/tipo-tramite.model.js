import { DataTypes } from 'sequelize';
import db from '../cfg/database.js';

const TipoTramite = db.define(
  'tipo',
  {
    id: {
      field: 'id_tipo_tramite',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: { field: 'nombre', type: DataTypes.STRING(60) },
  },
  { tableName: 'tipo_tramite', timestamps: false },
);
export default TipoTramite;
