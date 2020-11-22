/* eslint-disable camelcase */
import db from "../config/database";

export function findEndereco(id) {
    const query = `SELECT * FROM endereco WHERE id = '${id}'`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function listEndereco() {
    const query = "SELECT id, end, cidade_id FROM endereco ORDER BY end";

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function addEndereco(end, cidade_id) {
    const query = `INSERT INTO endereco (end, cidade_id)VALUES ('${end}', ${cidade_id})`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function editEndereco(id, end, cidade_id) {
    const query = `UPDATE endereco SET end = '${end}', cidade_id = ${cidade_id} WHERE id = ${id}`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function deleteEndereco(id) {
    const query = `DELETE FROM endereco WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}
