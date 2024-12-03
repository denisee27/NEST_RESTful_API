import { Res, HttpStatus, Response } from '@nestjs/common';
export class AppResponse {
    static ok(@Res() res, values: any): Response {
        return res.status(HttpStatus.OK).json({
            "result": values,
            "statusCode": HttpStatus.OK
        })
    }
    static badRequest(@Res() res, values: any): Response {
        return res.status(HttpStatus.BAD_REQUEST).json({
            "result": values,
            "statusCode": HttpStatus.BAD_REQUEST
        })
    }
}