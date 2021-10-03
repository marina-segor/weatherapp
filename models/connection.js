var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://marina:nini@cluster0.iaqfd.mongodb.net/test',
    options,
    function(err){
        console.log("BDD connectée!",err);
    }
)
