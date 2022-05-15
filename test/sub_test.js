const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author')

describe('Tìm hiểu về record sub', function() {

    //Drop
    beforeEach(function(done) {
        mongoose.connection.collections.authors.drop(function() {
            done();
        })
    })

    //Tạo ra quá trình kiểm tra 
    it('Tạo ra một tác giả với các quyển sách', function(done) {
        var tacgia = new Author({
            name: 'Sky Albert',
            books: [{ title: 'Xây dựng ứng dụng bằng Angular JS', numberOfPage: 20 }],
        })
        tacgia.save().then(function() {

            Author.findOne({ name: 'Sky Albert' }).then(function(record) {
                assert(record.books.length === 1);
                done();
            })
        })
    })

    it('Thêm cuốn sách ', function(done) {
        var tacgia = new Author({
            name: 'Sky Albert',
            books: [{ title: 'Xây dựng ứng dụng bằng Angular JS', numberOfPage: 50 }],
        })
        tacgia.save().then(function() {
            Author.findOne({ name: 'Sky Albert' }).then(function(record) {
                //Thêm một cuốn sách vào dữ liệu ở bên trên
                record.books.push({ title: 'Xây dựng Dom JS', numberOfPage: 50 });
                record.save().then(function() {
                    Author.findOne({ name: 'Sky Albert' }).then(function(result) {
                        assert(result.books.length === 2);
                        done();
                    })
                })
            })
        })
    })
})