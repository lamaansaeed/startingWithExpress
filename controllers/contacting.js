exports.getContacting =(req,res,next)=>{
    res.render('contact');
    
};


exports.postContacting = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/success');
};

exports.getSuccess =(req,res,next)=>{
    res.render('success');
}