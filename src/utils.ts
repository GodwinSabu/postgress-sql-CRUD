import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://wbbwtjvl:lRcRNNk4L7cw_kjvmV7aVrlFkKYQix6O@floppy.db.elephantsql.com/wbbwtjvl");
    await client.connect();
    return client;
}           