import { Request, Response } from "express";

const createShorten = (req: Request, res: Response) => {
    try {
        res.json({ Message: "ok" })
    } catch (error) {
        res.status(500).json({ Message: "Erro interno no servidor" })
    }
}

export default createShorten