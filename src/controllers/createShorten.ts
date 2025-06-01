import { Request, Response } from "express";
import createShortenService from "../services/createShortenService.js";

const createShorten = async (req: Request, res: Response) => {
    const link = "localhost:3000"
    const { url } = req.body
    try {
        const create = await createShortenService({url})
        res.json({ Mensagem: `${link}/${create.shortCode}` })
    } catch (error) {
        res.status(500).json({ Message: `Erro interno no servidor ${error}` })
    }
}

export default createShorten