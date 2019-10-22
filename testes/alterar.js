const db = require('../config/db')

const novoUsuario = {
    nome: 'Pedro',
    email: 'pedro@wemail.com.br',
    senha: '987456321'
}

// db('usuarios')
//     .where({ id: 1 })
//     .update({ nome: 'Pedro Garcia' })
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

async function alterarUsuario() {
    const { qtde } = await db('usuarios')
        .count('* as qtde')
        .first()

    // Inserir se estiver vazia
    if (qtde === 0) {
        await db('usuarios').insert(novoUsuario)
    }

    // Consulta
    let { id } = await db('usuarios')
        .select('id')
        .limit(1)
        .first()

    // Alteração
    await db('usuarios').where({ id })
        .update({
            nome: 'Pedro Garcia',
            email: 'pedro.gracia@wemail.com.br',
        })

    return db('usuarios').where({ id })
}

alterarUsuario()
    .then(usuario => console.log(usuario))
    .finally(() => db.destroy())