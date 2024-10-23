const asyncHandler = (reuestHandler) => {
    (req, res, next) => {
        Promise.resolve(reuestHandler(req,res,next))
        .catch((err) => next(err))
    }
}

export{asyncHandler}


// const asyncHandler = () => { }
// const asyncHandler = (func) => () => {}
// const asyncHandler =(func) => async () => {}

    //NOTE - basically it is the try catch method
// const asyncHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(req,res, next)
//     }catch(error){
//         res.status(err.code || 500).json({
//             success : false,
//             message: err.message
//         })
//     }
// }
