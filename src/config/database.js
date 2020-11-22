import MySQL from "mysql";

const connection = MySQL.createPool({
    host: "localhost",
    user: "life",
    password: "life123",
    database: "camera_dashboard",
    connectionLimit: 10
});

export default connection;
