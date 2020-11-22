import { addProjeto, editProjeto, deleteProjeto, listProjeto, findProjeto } from "../model/projetoModel";

export function newProjeto(req, res) {
    addProjeto(
        req.body.name,
        req.body.contato,
        req.body.cameraModelo,
        req.body.cidade_id,
        req.body.endereco,
        req.body.user_id,
        req.body.obs,
        req.body.nvr
    )
        .then(() => {
            res.status(200).send({ message: "Projeto criado." });
        })
        .catch((error) => {
            res.status(500).send({ message: "Erro, não foi possivel adicionar um projeto.", error });
        });
}

export function edit(req, res) {
    editProjeto(
        req.params.id,
        req.body.name,
        req.body.contato,
        req.body.cameraModelo,
        req.body.cidade_id,
        req.body.endereco,
        req.body.user_id,
        req.body.nvr,
        req.body.obs
    )
        .then(() => {
            res.status(200).send({ message: "Projeto editado com sucesso! " });
        })
        .catch((error) => {
            res.status(500).send({ message: "Ocorreu um erro ao editar o projeto", error });
        });
}

export function search(req, res) {
    findProjeto(req.params.id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(404).send({ message: "Projeto não encontrado!", error });
        });
}

export function list(req, res) {
    listProjeto()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send({ message: "Não foi possível buscar os projetos.", error });
        });
}

export function del(req, res) {
    deleteProjeto(req.params.id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send({ message: "Não foi possível deletar projeto", error });
        });
}
