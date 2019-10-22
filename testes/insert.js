const db = require('../config/db')

// const novoPerfil = {
//     nome: 'writer',
//     rotulo: 'Cadastrante'
// }

// db('perfis').insert(novoPerfil)
//     .then(res => console.log(res))
//     .catch(err => console.log(err.sqlMessage))
//     .finally(() => db.destroy())

const superUser = {
    nome: 'root' + Math.random(),
    rotulo: 'Super Usuário'
}

db.insert(superUser).into('perfis')
    .then(res => console.log(res))
    .catch(err => console.log(err.sqlMessage))
    .finally(() => db.destroy())