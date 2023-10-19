export default async function handler(req, res) {
    const mysql = require('mysql2/promise');
    // create the connection to database
    const dbconnection = await mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        // password: 'Lolnation6768',
        database: 'profile_bem'
    });

    try {
        const query = "SELECT * FROM profiles"
        const values = []
        const [data] = await dbconnection.execute(query, values)
        dbconnection.end()

        res.status(200).json({ results: data })
    } catch (error) {
        throw new Error(error);
    }
}