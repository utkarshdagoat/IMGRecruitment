const {logEvents} = require('./logger');


const errorHandler = (err  , req , res , next) =>{
     logEvents(`${err.name} : ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}` , 'errLog.log')
     console.log(err.stack)
     const status = res.statusCode ? res.statusCode : 500 ; //server side error
     res.status(500).json({message : err.message});
     next();
}

module.exports = errorHandler