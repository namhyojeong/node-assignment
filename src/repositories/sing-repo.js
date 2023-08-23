const singQuery = require('../database/sing-query');

exports.findAllSings = (connection) => {

    return new Promise((resolve, reject) => {

        connection.query(singQuery.findAllSings(), (err, result) => {
            if(err) {
                reject(err);
            }

            resolve(result);
        });
    });
};

exports.findSingBySingNo = (connection, singNo) => {

    return new Promise((resolve, reject) => {

        connection.query(singQuery.findSingBySingNo(singNo), (err, result) => {
            if(err) {
                reject(err);
            }

            resolve(result);
        });
    });
};

exports.registNewSing = (connection, newSing) => {

    return new Promise((resolve, reject) => {

        connection.query(
            singQuery.registNewSing(),
        [
            newSing.singNo,
            newSing.singTitle,
            newSing.theDateOfIssue,
            newSing.akmuNo
        ],
        (err, result) => {
            if(err) {
                reject(err);
            }
            console.log('repo result :', result);

            resolve(result);
        });
    });
};

exports.updateSingBySingNo = (connection, updateSing) => {

    return new Promise((resolve, reject) => {

        connection.query(
            singQuery.updateSingBySingNo(),
        [
            updateSing.singTitle,
            updateSing.theDateOfIssue,
            updateSing.akmuNo,
            updateSing.singNo
        ],
        (err, result) => {
            if(err) {
                reject(err);
            }
            console.log('repo result :', result);

            resolve(result);
        });
    });
}

exports.deleteSingBySingNo = (connection, deleteSingId) => {

    return new Promise((resolve, reject) => {

        connection.query(
            singQuery.deleteSingBySingNo(),
        [
            deleteSingId
        ],
        (err, result) => {
            if(err) {
                reject(err);
            }
            console.log('repo result :', result);

            resolve(result);
        });
    });
}