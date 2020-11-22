import db from "../config/database";

export function findUser(id) {
    const query = `SELECT * FROM user WHERE id = '${id}'`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function listUsers() {
    const query = "SELECT id, name, email, password FROM user ORDER BY name";

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function addUser(name, email, password) {
    const query = `INSERT INTO user (name , email, password)VALUES ('${name}', '${email}', '${password}')`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function editUser(idUser, name, email, password) {
    const query = `UPDATE user SET name = '${name}', email = '${email}', password = '${password}' WHERE id = ${idUser}`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function deleteUser(id) {
    const query = `DELETE FROM user WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}
