import MySQL from "mysql";

const connection = MySQL.createPool({
    //host: "104.154.120.184",
    //user: "root",
    //password: "123",
    //database: "dashboard",
    host: 'localhost',
    port: 3306,
    user: 'life',
    password: 'life123',
    database: "camera_dashboard",
    connectionLimit: 10
});

export default connection;
