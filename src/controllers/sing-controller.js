const HttpStatus = require('http-status');
const SingService = require('../services/sing-service');
const SingDTO = require('../dto/sing-dto');

exports.findAllSings = async (req, res, next) => {

    const sings = await SingService.findAllSings();

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'OK',
        results: sings
    });
}

exports.findSingBySingNo = async (req, res, next) => {

    const results = await SingService.findSingBySingNo(req.params.singNo);

    if(results && results.length > 0) {
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'OK',
            results: results
        });
    }

    if(results && results.length === 0) {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'Not Found',
            code: -999999,
            results: [],
            links: [
                {
                    rel: 'registNewSing',
                    method: 'POST',
                    href: '/api/v1/sing/registNewSing'
                }
            ]
        });
    }
};

exports.registNewSing = async (req, res, next) => {

    const result = await SingService.registNewSing(new SingDTO(req.body));
    if(result) {
        res.status(HttpStatus.CREATED).send({
            status: HttpStatus.CREATED,
            message: 'CREATED',
            results: result,
            contentLocation: `/sing/${result.singNo}`
        });
    } else {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'Not Found',
            code: -999999,
            results: [],
            links: [
                {
                    rel: 'registNewSing',
                    method: 'POST',
                    href: '/api/v1/sing/registNewSing'
                }
            ]
        })
    }
};

exports.updateSingBySingNo = async (req, res, next) => {

    const result = await SingService.updateSingBySingNo(new SingDTO(req.body));
    if(result) {
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'OK',
            results: result,
            contentLocation: `/sing/${result.singNo}`
        });
    } else {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'Not Found',
            code: -999999,
            results: [],
            links: [
                {
                    rel: 'updateSingBySingNo',
                    method: 'PUT',
                    href: '/api/v1/sing/updateSingBySingNo'
                }
            ]
        })
    }
};

exports.deleteSingBySingNo = async (req, res, next) => {

    const result = await SingService.deleteSingBySingNo(req.params.singNo);
    if(result) {
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'OK',
            results: result,
            contentLocation: `/sing/${result.singNo}`
        });
    } else {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'Not Found',
            code: -999999,
            results: [],
            links: [
                {
                    rel: 'deleteSingBySingNo',
                    method: 'DELETE',
                    href: '/api/v1/sing/deleteSingBySingNo'
                }
            ]
        })
    }
};