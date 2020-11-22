import { addModelo, listModelo, findModelo, deleteModelo, editModelo } from "../model/modeloModel";

export function newModelo(req, res) {
    addModelo(req.body.name)
        .then(() => {
            res.status(200).send({ message: "Modelo adicionada!" });
        })
        .catch((error) => {
            res.status(500).send({ message: "Erro, o modelo não foi adicionado", error });
        });
}

export function search(req, res) {
    findModelo(req.params.id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(404).send({ message: "Modelo não econtrada!", error });
        });
}

export function list(req, res) {
    listModelo()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send({ message: "Não foi possível buscar as modelos.", error });
        });
}

export function edit(req, res) {
    editModelo(req.params.id, req.body.name)
        .then(() => {
            res.status(200).send({ message: "Modelo editado com sucesso! " });
        })
        .catch((error) => {
            res.status(500).send({ message: "Ocorreu um erro ao editar modelo", error });
        });
}

export function del(req, res) {
    deleteModelo(req.params.id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send({ message: "Não foi possível deletar modelo", error });
        });
}
