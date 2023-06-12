const IsAuth= (req, res, next)=>{
    if(req.session.IsAuth){
        next();

    }
    else{
        res.redirect('/register');
    }
}
export default IsAuth;