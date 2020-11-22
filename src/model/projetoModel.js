/* eslint-disable camelcase */
import db from "../config/database";

export function findProjeto(id) {
    const query = `SELECT * FROM projeto WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function listProjeto() {
    const query =
        "SELECT id, name, contato, cameraModelo, cidade_id, endereco, user_id, obs, nvr FROM projeto ORDER BY name";

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function addProjeto(name, contato, cameraModelo, cidade_id, endereco, user_id, nvr, observacao) {
    const query = `INSERT INTO projeto (name, contato, cameraModelo, cidade_id, endereco, user_id, obs, nvr)VALUES ('${name}', '${contato}', '${cameraModelo}', ${cidade_id}, '${endereco}', ${user_id}, '${nvr}', ${observacao})`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function editProjeto(id, name, contato, cameraModelo, cidade_id, endereco, user_id, nvr, obs) {
    const query = `UPDATE projeto SET name = '${name}', contato = '${contato}', cameraModelo = '${cameraModelo}', cidade_id = ${cidade_id}, endereco = '${endereco}', user_id = ${user_id}, nvr = '${nvr}', obs = '${obs}' WHERE id = ${id}`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export function deleteProjeto(id) {
    const query = `DELETE FROM projeto WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}
