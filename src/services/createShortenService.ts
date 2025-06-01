import prisma from "../prismaClient/prismaClient.js";
import { nanoid } from "nanoid";
import { BodyReq } from "../types/types.js"

const createShortenService = async ({ url }: BodyReq) => {
    const shortCode =  nanoid(5)
    const createShort = await prisma.link.create({
        data: {
            url,
            shortCode,
        }
    })
    return createShort
}

export default createShortenService