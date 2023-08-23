const getConnection = require('../database/connection');
const SingRepository = require('../repositories/sing-repo');

exports.findAllSings = () => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const results = SingRepository.findAllSings(connection);

        connection.end();

        resolve(results);
    });
}

exports.findSingBySingNo = (singNo) => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const results = SingRepository.findSingBySingNo(connection, singNo);

        connection.end();

        resolve(results);
    });
};

exports.registNewSing = (sing) => {

    return new Promise(async (resolve, reject) => {

        const connection = getConnection();

        connection.beginTransaction();

        try {

            const result = await SingRepository.registNewSing(connection, sing);
            console.log('result : ', result.insertId);

            const insertedSing = await SingRepository.findSingBySingNo(connection, result.insertId);

            connection.commit();
            console.log('커밋성공');
            console.log("insertedSong : ",insertedSing);
            resolve(insertedSing);

        } catch(err) {
            connection.rollback();
            console.error('롤백성공');

            reject(err);
        } finally {
            connection.end();
            console.log('connection종료');
        }
    });
};

exports.updateSingBySingNo = (singNo) => {

    return new Promise(async (resolve, reject) => {
        console.log("singNo : ", singNo);
        const connection = getConnection();

        connection.beginTransaction();

        try {
            
            const result = await SingRepository.updateSingBySingNo(connection, singNo);
            console.log(result);

            // const updateSing = await SingRepository.findSingBySingNo(connection, result.updateId);

            connection.commit();
            console.log('commit successfully');

            resolve(result);

        } catch(err) {
            connection.rollback();
            console.error('rollback successfully');
            
            reject(err);
        } finally {
            connection.end();
            console.log('connection is closed successfully');
        };
    });
};

exports.deleteSingBySingNo = (singNo) => {

    return new Promise(async (resolve, reject) => {

        const connection = getConnection();

        connection.beginTransaction();

        try {

            const result = await SingRepository.deleteSingBySingNo(connection, singNo);


            connection.commit();
            console.log('commit successfully');

            resolve(result);

        } catch(err) {
            connection.rollback();
            console.error('rollback successfully');
            
            reject(err);
        } finally {
            connection.end();
            console.log('connection is closed successfully');
        };
    });
};