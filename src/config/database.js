import MySQL from "mysql";

const connection = MySQL.createPool({
    //host: "104.154.120.184",
    //user: "root",
    //password: "123",
    //database: "dashboard",
    host: '104.154.120.184',
    port: 3306,
    user: 'root',
    password: '123',
    database: "dashboard",
    connectionLimit: 10
});

export default connection;
