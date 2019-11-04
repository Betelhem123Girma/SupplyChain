const log = require('./log');
exports.data = (payload, res) => res.status(200).json(payload)
exports.errorReject = (reject, res) =>
    exports.send(true, reject.message || 'Internal server error', reject.status || 500, res);
exports.send = (error, message, status, res) => {
        let data = {error, message, status};
        if (error) {
            log.e(JSON.stringify(message, null, 3));
        }
        res.status(status).json(data);
    };
    exports.reject = message => {
        return {message, status: 400};
    };