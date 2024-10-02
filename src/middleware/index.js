// prints log to terminal every request
const myLogger = function (req, res, next) {
    // console.log(req.body)
    console.log("Middleware Logger");

    next()
}

export default myLogger;