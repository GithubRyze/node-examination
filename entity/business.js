class Business extends Error {
    constructor (code, msg, data) {
        super(msg);
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
}
module.exports = Business;