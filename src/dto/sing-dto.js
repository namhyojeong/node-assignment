class SingDTO {

    singNo;
    singTitle;
    theDateOfIssue;
    akmuNo;

    constructor(data) {
        this.singNo = data.singNo;
        this.singTitle = data.singTitle;
        this.theDateOfIssue = data.theDateOfIssue;
        this.akmuNo = data.akmuNo;
    }
}

module.exports = SingDTO;