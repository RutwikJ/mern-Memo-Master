const errorHandler= (err,req,res,next)=>{
    console.log(err.stack)


    const statusCode=res.statusCode || 500
    const message = err.message || 'Internal server Error'
    res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
    
}
 export default errorHandler;