const express = require('express');
const server = express();
const DBPORT = process.env.PORT || 5431;
const HOST = process.env.HOST || 'localhost';
const PORT =3000;

const { Client } = require('pg')

const client = new Client({
    host: HOST,
    port: DBPORT,
    user: 'postgres',
    database: 'postgres',
    password: 'password',
  })
console.log(DBPORT, HOST)
client.connect();
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.get('/', (req, res) => res.status(200).send('hello'));