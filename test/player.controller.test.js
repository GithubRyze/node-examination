const request = require('supertest');
const app = require('../app');

describe('#test player restful api', function(){//http测试
    let server;
    before(function() {//执行测试用例前开启服务器
        // runs before all tests in this block
        server = app.listen(8080);
    });
    after(function() {//执行完后关闭服务器监听
    // runs after all tests in this block
        server.close();
    });

    beforeEach(function() {
    // runs before each test in this block
    });

    afterEach(function() {
    // runs after each test in this block
    });
    describe('#test /player api', function(){
        // test post /player
        it('test post /player', function(done){
            request(server)
                .post('/player')
                .send({id: 0, name: 'test', position: ''})
                .expect(405)
                .end((err, res) => {
                    done();
                });
        });
        it('test post /player', function(done){
            request(server)
                .post('/player')
                .send({id: 0, name: 'test', position: 'sf'})
                .expect(404)
                .end((err, res) => {
                    done();
                });
        });
        it('test post /player', function(done){
            request(server)
                .post('/player')
                .send({id: 0, name: 'test', position: 'SF'})
                .expect(200)
                .end((err, res) => {
                    done();
                });
        });
        /**
         * test get /player/{player}
         */
        it('#test get /player/{player}}', function(done){
            request(server)
                .get('/player/1qq')
                .expect(400, done);
        });
        it('#test get /player/{player}}', function(done){
            request(server)
                .get('/player/-11')
                .expect(400, done);
        });
        it('#test get /player/{player}}', function(done){
            request(server)
                .get('/player/undefined')
                .expect(400, done);
        });
        it('#test get /player/{player}}', function(done){
            request(server)
                .get('/player/1')
                .expect(200, done);
        });

        /**
         * test update /player
         */
        it('#test update /player}', function(done){
            request(server)
                .put('/player')
                .send({id: 1, name: 'update', position: 'ss'})
                .expect(405, done);
        });
        it('#test update /player}', function(done){
            request(server)
                .put('/player')
                .send({id: 1111, name: 'update', position: 'SF'})
                .expect(404, done);
        });
        it('#test update /player}', function(done){
            request(server)
                .put('/player')
                .send({id: 1, name: 'update', position: 'C'})
                .expect(200, done);
        });
        /**
         * test update /player
         */

        it('#test delete /player/{playId}}', function(done){
            request(server)
                .delete('/player/111')
                .expect(404, done);
        });
        it('#test delete /player/{playId}}', function(done){
            request(server)
                .delete('/player/11**q')
                .expect(400, done);
        });
        it('#test delete /player/{playId}}', function(done){
            request(server)
                .delete('/player/')
                .expect(404, done);
        });
        it('#test delete /player/{playId}}', function(done){
            request(server)
                .delete('/player/1')
                .expect(200, done);
        });
    });
});
