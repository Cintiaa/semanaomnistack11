const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.use(cors({ origin: true, credentials: true }));
/**
 *  Rota / Recurso 
*/

/**
 * Método HTTP 
 * GET: Buscar uma informação no back-end
 * POST: Criar informação no back-end
 * PUT: Alterar uma informação no back-ens
 * DELETE: Deleta uma informação no back-end
 */


/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (servem para filtros, paginação)
 * Route Params: Prâmetros utilizados para identificar recursos
 * Request Body:  Corpo da requisição, utilizado para criar ou alterar recursos
 * */


/**
 * Bancos de Dados
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSql: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users).select('*').where()
 */


module.exports = app;
