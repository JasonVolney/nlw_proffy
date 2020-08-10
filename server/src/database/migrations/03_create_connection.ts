import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
      

    //Quando o usuário clicar em entrar em contato será anotado o id do professor e o horário que isso aconteceu     
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') 
            .onDelete('CASCADE'); 

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP')) // pega o horário atual e salva no campo 'created_at'
            .notNullable(); // não pode ser nulo    
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}