const mongoose = require('mongoose')

//ES6 Promise
mongoose.Promise = global.Promise;

// Connect to mongodb
before(function(done) {
    mongoose.connect('mongodb://localhost/testdb')

    mongoose.connection.once('open', function() {
        console.log('kết nối đã được thực hiện');
        done();
    }).on('error', function(error) {
        console.log('Kết Nối Bị Lỗi,', error);
    })
})

//Drop các personcharacter collection trước khi kiểm tra và thêm 
beforeEach(function(done) {
        //Drop collection
        mongoose.connection.collections.personchars.drop(function() {
            done()
        })
    })
    /*
    so sánh:
    - SQL DB: Table, Row, Column, Joins, Primary Key
    - MongoDB: collection,Document,field,Embeded Documents/linking,Primary Key
    */