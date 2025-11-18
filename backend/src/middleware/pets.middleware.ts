import type { Request, Response, NextFunction } from "express"

export const validateNumericId = (
    req: Request<{ id: string }>, 
    res: Response<{ message: string }>, 
    next: NextFunction
) => {
    const { id } = req.params;

    // regex to check that the param is a number
    if(!/^\d+$/.test(id)) {
        res.status(400).json({ message: "Pet id must be a number" })
    }
    else {
        next()
    }
}