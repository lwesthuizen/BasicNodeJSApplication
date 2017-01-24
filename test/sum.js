let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('/POST sum', () => {
      it('expected result:  3', (done) => {
        let sumRequest = {
            num1: 1,
            num2: 2
        }
        chai.request(server)
            .post('/')
            .send(sumRequest)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('answer').eql(3);
              done();
            });
      });
  });

  describe('/POST sum', () => {
        it('expected result:  1', (done) => {
          let sumRequest = {
              num1: 1,
              num2: 0
          }
          chai.request(server)
              .post('/')
              .send(sumRequest)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('answer').eql(1);
                done();
              });
        });
    });

    describe('/POST sum', () => {
          it('expected result:  0', (done) => {
            let sumRequest = {
                num1: -10,
                num2: 10
            }
            chai.request(server)
                .post('/')
                .send(sumRequest)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('answer').eql(0);
                  done();
                });
          });
      });
