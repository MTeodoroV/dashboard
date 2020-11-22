/* eslint-disable camelcase */
import db from "../config/database";

export function findCamera(id) {
    const query = `SELECT * FROM camera WHERE projeto_id = '${id}'`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function listCamera() {
    const query = "SELECT id, ip, name, porta, projeto_id FROM camera ORDER BY ip";

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function addCamera(ip, name, porta, projeto_id) {
    const query = `INSERT INTO camera (ip , name, porta, projeto_id)VALUES ('${ip}', '${name}', '${porta}', ${projeto_id})`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function editCamera(ip, name, porta, id) {
    const query = `UPDATE camera SET ip = '${ip}', name = '${name}', porta = '${porta}'WHERE id = ${id}`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function deleteCamera(id) {
    const query = `DELETE FROM camera WHERE id = ${id}`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}
