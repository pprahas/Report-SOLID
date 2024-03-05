import { getUser } from "../../../database/user/Get/getUserByEmail";

export async function loginUser(req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;

    let dbUser = await getUser(email);
    if (!dbUser) {
      return res.status(400).send({ msg: "Incorrect Email or Password" });
    }
    bcrypt.compare(password, dbUser.password).then((match) => {
      if (match) {
        return res.status(200).send(dbUser);
      }
      return res.status(400).send({ msg: "Incorrect Email or Password" });
    });
  } catch (error) {
    return res.status(400).send({ msg: "Login failed" });
  }
}
