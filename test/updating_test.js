const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar')

// Miêu tả lại quá trình kiểm tra 
describe('Cập nhật bản ghi (records)', function() {
    var character;
    //Saving record
    beforeEach(function(done) {
        character = new PersonChar({
            name: 'Toan',
            height: 168
        });

        character.save().then(function() {
            done()
        })
    });
    //Find one
    it('Cập nhật bản ghi từ CSDL', function(done) {
        PersonChar.findOneAndUpdate({ name: 'Toan' }, { name: 'Sky Albert' }).then(function() {
            PersonChar.findOne({ _id: character._id }).then(function(result) {
                assert(result.name === 'Sky Albert');
                done()
            })
        })
    });

    it('Tăng chiều cao lên 2', function(done) {
        PersonChar.update({}, { $inc: { height: 2 } }).then(function() {
            PersonChar.findOne({ name: 'Toan' }).then(function(record) {
                assert(record.height === 170);
                done()
            })
        })
    })
})