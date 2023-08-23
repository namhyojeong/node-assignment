exports.findAllSings = () => {

    return `
        SELECT *
          FROM TBL_GROUP
    `;
};

exports.findSingBySingNo = (singNo) => {

    return `
        SELECT *
          FROM TBL_GROUP
         WHERE SING_NO = '${singNo}'
    `;
};

exports.registNewSing = () => {

    return `
        INSERT
          INTO TBL_GROUP
        (SING_NO, SING_TITLE, THE_DATE_OF_ISSUE, AKMU_NO)
        VALUES
        (?, ?, ?, ?)
    `;
};

exports.updateSingBySingNo = (singNo) => {

    return `
        UPDATE
               TBL_GROUP
           SET SING_TITLE = ?
             , THE_DATE_OF_ISSUE = ?
             , AKMU_NO = ?
         WHERE SING_NO = ?
        `;
};

exports.deleteSingBySingNo = (singNo) => {

    return `
        DELETE
          FROM TBL_GROUP
         WHERE SING_NO = ?
    `;
};