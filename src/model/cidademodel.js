import db from "../config/database";

export function addCidade(name) {
    const query = `INSERT INTO cidade (name)VALUE ('${name}')`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function findCidade(id) {
    const query = `SELECT * FROM cidade WHERE id = '${id}'`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function listCidade() {
    const query = "SELECT id, name FROM cidade";

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function editCidade(id, name) {
    const query = `UPDATE cidade SET name = '${name}' WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function deleteCidade(id) {
    const query = `DELETE FROM cidade WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}
