import { USER } from "constants/mockUser";
import { NextApiRequest, NextApiResponse } from "next";

/* This is a simple authentication api for testing login only */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = JSON.parse(req.body);

  if (username !== USER.username && password !== USER.password) {
    res.status(404).json({ error: `User not found for ${username}` });
  } else {
    res.status(200).json({ token: "mock-token" });
  }
}
