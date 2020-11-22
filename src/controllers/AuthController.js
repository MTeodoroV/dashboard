import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";
import AuthModel from "../model/authModel";
import config from "../config/config";

class AuthController {
    static Login(req, res) {
        AuthModel.findUser(req.body.email)
            .then((response) => {
                if (bcrypt.compareSync(req.body.password, response.password)) {
                    const token = JWT.sign(
                        {
                            id: response.id,
                            access: response.level_id
                        },
                        config.secret,
                        { expiresIn: 60 * 10 }
                    );

                    res.status(200).send({ auth: true, token, user: response.id });
                } else {
                    res.status(401).send({ auth: false, token: null });
                }
            })
            .catch((error) => {
                res.status(500).send({ message: "Ocorreu um erro ao realizar o Login.", error });
            });
    }
}

export default AuthController;
