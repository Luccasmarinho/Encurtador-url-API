import { Request, Response } from "express";
import redirectUrlService from "../services/redirectUrlService.js";

const redirectUrl = async (req: Request, res: Response) => {
    const {shortCode} = req.params
    try {
        const redirect = await redirectUrlService({ shortCode })
        if (!redirect) {
            res.status(404).json({ message: "URL não encontrada" });
            return
        }

        res.redirect(redirect?.url)
    } catch (error) {
        res.status(500).json({ message: `Erro interno no servidor ${error}` })
    }
}

export default redirectUrl