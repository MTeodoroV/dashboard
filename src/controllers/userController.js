import bcrypt from "bcryptjs";
import { addUser, editUser, deleteUser, listUsers, findUser } from "../model/userModel";

export function newUser(req, res) {
    addUser(req.body.name, req.body.email, bcrypt.hashSync(req.body.password), req.body.contato, req.body.idCidade, 1)
        .then(() => {
            res.status(200).send({ message: "Usuario criado." });
        })
        .catch((error) => {
            res.status(500).send({ message: "Erro, não foi possivel adicionar usuario.", error });
        });
}

export function edit(req, res) {
    editUser(req.params.id, req.body.name, req.body.email, bcrypt.hashSync(req.body.password))
        .then(() => {
            res.status(200).send({ message: "Usuário editado com sucesso! " });
        })
        .catch((error) => {
            res.status(500).send({ message: "Ocorreu um erro ao editar o usuário", error });
        });
}

export function search(req, res) {
    findUser(req.params.id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(404).send({ message: "Usuário não encontrado!", error });
        });
}

export function list(req, res) {
    listUsers()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send({ message: "Não foi possível buscar os usuários.", error });
        });
}

export function del(req, res) {
    deleteUser(req.params.id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send({ message: "Não foi possível deletar usuario", error });
        });
}

export default newUser;
