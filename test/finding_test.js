const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar')

// Miêu tả lại quá trình kiểm tra 
describe('Tìm kiếm bản ghi (records)', function() {
    var character;
    //Saving record
    beforeEach(function(done) {
        character = new PersonChar({
            name: 'Toan'
        });

        character.save().then(function() {
            assert(character.isNew === false)
            done()
        })
    });
    //Find one
    it('Tìm một bản ghi từ cơ sở dữ liệu', function(done) {
        PersonChar.findOne({ name: 'Toan' }).then(function(result) {
            assert(result.name === 'Toan');
            done();
        })
    })

    it('Tìm một bản ghi bẳng id từ cơ sở dữ liệu', function(done) {
        console.log('địa chỉ ID', character);
        PersonChar.findOne({ _id: character._id }).then(function(dataresult) {
            assert(dataresult._id.toString() === character._id.toString());
            done()
        })
    })
})