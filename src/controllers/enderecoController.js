import { addEndereco, editEndereco, deleteEndereco, listEndereco, findEndereco } from "../model/enderecoModel";

export function newEndereco(req, res) {
    addEndereco(req.body.end, req.body.cidade_id)
        .then(() => {
            res.status(200).send({ message: "Endereço criado." });
        })
        .catch((error) => {
            res.status(500).send({ message: "Erro, não foi possivel adicionar endereço.", error });
        });
}

export function edit(req, res) {
    editEndereco(req.params.id, req.body.end, req.body.cidade_id)
        .then(() => {
            res.status(200).send({ message: "Endereço editado com sucesso! " });
        })
        .catch((error) => {
            res.status(500).send({ message: "Ocorreu um erro ao editar o endereço", error });
        });
}

export function search(req, res) {
    findEndereco(req.params.id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(404).send({ message: "Endereço não encontrado!", error });
        });
}

export function list(req, res) {
    listEndereco()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send({ message: "Não foi possível buscar os endereços.", error });
        });
}

export function del(req, res) {
    deleteEndereco(req.params.id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send({ message: "Não foi possível deletar endereço", error });
        });
}
