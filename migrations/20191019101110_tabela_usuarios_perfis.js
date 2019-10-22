
exports.up = function(knex, Response) {
    return knex.schema.createTable('usuarios_pefis', table => {
        table.integer('usuario_id').unsigned()
        table.integer('perfil_id').unsigned()
        table.foreign('usuario_id').references('usuarios.id')
        table.foreign('perfil_id').references('perfis.id')
        table.primary(['usuario_id', 'perfil_id'])
    })
};

exports.down = function(knex, Response) {
    return knex.schema.dropTable('usuarios_pefis')
};
