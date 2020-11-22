import db from "../config/database";

export function addModelo(name) {
    const query = `INSERT INTO modelo (name) VALUE ('${name}')`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function findModelo(id) {
    const query = `SELECT * FROM modelo WHERE id = '${id}'`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function listModelo() {
    const query = "SELECT id, name FROM modelo";

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function editModelo(idModelo, name) {
    const query = `UPDATE modelo SET name = '${name}' WHERE id = ${idModelo}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function deleteModelo(id) {
    const query = `DELETE FROM modelo WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}
