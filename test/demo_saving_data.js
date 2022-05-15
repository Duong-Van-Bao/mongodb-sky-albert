const mocha = require('mocha');
const assert = require('assert'); //là hàm của nodeJS
const PersonChar = require('../models/personchar')

// Miêu tả lại quá trình kiểm tra 
describe('Miêu tả thêm dữ liệu', function() {
    //Tạo ra một cái test
    // it('kiểm tra hai số cộng lại', function() {
    //     assert(1 + 1 === 2);
    // })
    it('Thêm một bảng ghi vào cơ sở dữ liệu', function(done) {
        var character = new PersonChar({
            name: 'Sky Albert',
        });
        character.save().then(function() {
            assert(character.isNew === false);
            done();
        })
    })
})