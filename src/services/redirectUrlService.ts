import prisma from "../prismaClient/prismaClient.js";
interface shortCode {
    shortCode: string
}

const redirectUrlService = async ({ shortCode }: shortCode) => {
    const findUrl = await prisma.link.findFirst({
        where: {
            shortCode
        }
    });
    return findUrl;
};

export default redirectUrlService