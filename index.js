module.exports = function(app, logger){
    app.get('/health', function(req, res){
        res.end(process.uptime().toString());
    })
    app.get('/play', function(req, res){
        
        var choice = req.query.choice;
        res.send(""+Math.floor(Math.random()*3));
         

    })

}