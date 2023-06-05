const IsAuth= (req, res, next)=>{
    if(req.session.IsAuth){
        next();

    }
    else{
        res.redirect('/login');
    }
}
export default IsAuth;