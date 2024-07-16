import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('CONEXÃO BEM SUCEDIDA.');
  })
  .catch(error => {
    console.error('ERRO AO CONECTAR:', error);
  });

export default sequelize;
