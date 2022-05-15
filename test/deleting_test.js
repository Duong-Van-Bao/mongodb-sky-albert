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
    it('xóa một bản ghi từ CSDL', function(done) {
        PersonChar.findOneAndRemove({ name: 'Toan' }).then(function() {
            PersonChar.findOne({ name: 'Toan' }).then(function(result) {
                assert(result === null);
                done();
            })
        })
    })
})