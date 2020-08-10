import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

    //Cria a chave estrangeira     
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') //atualiza todos os dados onde eles existirem
            .onDelete('CASCADE'); //deleta todos os dados do professor
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}