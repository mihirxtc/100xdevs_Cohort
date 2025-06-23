import { Client } from "pg";

const client = new Client({
    connectionString: 'postgresql://sql_test_owner:I0zy5atWhosV@ep-autumn-river-a5eu0lhy.us-east-2.aws.neon.tech/sql_test?sslmode=require'
})

// creating table
async function createUsersTable() {
    await client.connect();

    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
}
createUsersTable();

// Inserting data
async function insertData(username: string, email: string, password: string) {
    try {
        await client.connect();
        const insertQuery = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log('Insertion success:', res);
    } catch (err) {
        console.error('Error during insertion:', err);
    } finally {
        await client.end();
    }
}
insertData('mihirxtc', 'mihirxtc@gmail.com', 'mihir@8011').catch(console.error);
