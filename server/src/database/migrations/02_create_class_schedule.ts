import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

    //Cria a chave estrangeira     
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE') //atualiza todos os dados onde eles existirem
            .onDelete('CASCADE'); //deleta todos os dados do professor
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}