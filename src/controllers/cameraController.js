import { addCamera, listCamera, findCamera, deleteCamera, editCamera } from "../model/cameraModel";

export function newCamera(req, res) {
    addCamera(req.body.ip, req.body.name, req.body.porta, req.body.projeto_id)
        .then(() => {
            res.status(200).send({ message: "Camera adicionada!" });
        })
        .catch((error) => {
            res.status(500).send({ message: "Erro, a camera não foi adicionada", error });
        });
}

export function search(req, res) {
    findCamera(req.params.id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(404).send({ message: "Camera não econtrada!", error });
        });
}

export function list(req, res) {
    listCamera()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send({ message: "Não foi possível buscar as cameras.", error });
        });
}

export function edit(req, res) {
    editCamera(req.params.id, req.body.name, req.body.ip, req.body.porta)
        .then(() => {
            res.status(200).send({ message: "Camera editado com sucesso! " });
        })
        .catch((error) => {
            res.status(500).send({ message: "Ocorreu um erro ao editar a camera", error });
        });
}

export function del(req, res) {
    deleteCamera(req.params.id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send({ message: "Não foi possível deletar camera", error });
        });
}
