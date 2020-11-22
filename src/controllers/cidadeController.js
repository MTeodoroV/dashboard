import { addCidade, listCidade, findCidade, deleteCidade, editCidade } from "../model/cidadeModel";

export function newCidade(req, res) {
    addCidade(req.body.name)
        .then(() => {
            res.status(200).send({ message: "Cidade adicionada!" });
        })
        .catch((error) => {
            res.status(500).send({ message: "Erro, a cidade não foi adicionada", error });
        });
}

export function search(req, res) {
    findCidade(req.params.name)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(404).send({ message: "Cidade não econtrada!", error });
        });
}

export function list(req, res) {
    listCidade()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send({ message: "Não foi possível buscar as cidades.", error });
        });
}

export function edit(req, res) {
    editCidade(req.params.id, req.body.name)
        .then(() => {
            res.status(200).send({ message: "Cidade editado com sucesso! " });
        })
        .catch((error) => {
            res.status(500).send({ message: "Ocorreu um erro ao editar a cidade", error });
        });
}

export function del(req, res) {
    deleteCidade(req.params.id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send({ message: "Não foi possível deletar cidade", error });
        });
}
