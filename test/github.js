var request = require('supertest'),
    assert = require("assert");

var data = "payload=%7B%22ref%22%3A%22refs%2Fheads%2Fmaster%22%2C%22after%22%3A%22b3629f74715fdf09c40326a769a74c5a39aaa8fc%22%2C%22before%22%3A%228154bb0540d076c1f428f8d94050eceb626c32ef%22%2C%22created%22%3Afalse%2C%22deleted%22%3Afalse%2C%22forced%22%3Afalse%2C%22compare%22%3A%22https%3A%2F%2Fgithub.com%2Ffreeserver%2Fgitpub%2Fcompare%2F8154bb0540d0...b3629f74715f%22%2C%22commits%22%3A%5B%7B%22id%22%3A%22430aec30faee49c122b30e46fff7c2ed78363735%22%2C%22distinct%22%3Atrue%2C%22message%22%3A%22Added+more+context+to+README.md%22%2C%22timestamp%22%3A%222013-10-06T04%3A05%3A31-07%3A00%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2Ffreeserver%2Fgitpub%2Fcommit%2F430aec30faee49c122b30e46fff7c2ed78363735%22%2C%22author%22%3A%7B%22name%22%3A%22Matt+Copperwaite%22%2C%22email%22%3A%22mattcopp%2Bgit%40gmail.com%22%2C%22username%22%3A%22yamatt%22%7D%2C%22committer%22%3A%7B%22name%22%3A%22Matt+Copperwaite%22%2C%22email%22%3A%22mattcopp%2Bgit%40gmail.com%22%2C%22username%22%3A%22yamatt%22%7D%2C%22added%22%3A%5B%5D%2C%22removed%22%3A%5B%5D%2C%22modified%22%3A%5B%22README.md%22%5D%7D%2C%7B%22id%22%3A%22b3629f74715fdf09c40326a769a74c5a39aaa8fc%22%2C%22distinct%22%3Atrue%2C%22message%22%3A%22Merge+pull+request+%231+from+yamatt%2Fmaster%5Cn%5CnAdded+more+context+to+README.md%22%2C%22timestamp%22%3A%222013-10-06T04%3A10%3A55-07%3A00%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2Ffreeserver%2Fgitpub%2Fcommit%2Fb3629f74715fdf09c40326a769a74c5a39aaa8fc%22%2C%22author%22%3A%7B%22name%22%3A%22Matthew+Copperwaite%22%2C%22email%22%3A%22mattcopp%40gmail.com%22%2C%22username%22%3A%22yamatt%22%7D%2C%22committer%22%3A%7B%22name%22%3A%22Matthew+Copperwaite%22%2C%22email%22%3A%22mattcopp%40gmail.com%22%2C%22username%22%3A%22yamatt%22%7D%2C%22added%22%3A%5B%5D%2C%22removed%22%3A%5B%5D%2C%22modified%22%3A%5B%22README.md%22%5D%7D%5D%2C%22head_commit%22%3A%7B%22id%22%3A%22b3629f74715fdf09c40326a769a74c5a39aaa8fc%22%2C%22distinct%22%3Atrue%2C%22message%22%3A%22Merge+pull+request+%231+from+yamatt%2Fmaster%5Cn%5CnAdded+more+context+to+README.md%22%2C%22timestamp%22%3A%222013-10-06T04%3A10%3A55-07%3A00%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2Ffreeserver%2Fgitpub%2Fcommit%2Fb3629f74715fdf09c40326a769a74c5a39aaa8fc%22%2C%22author%22%3A%7B%22name%22%3A%22Matthew+Copperwaite%22%2C%22email%22%3A%22mattcopp%40gmail.com%22%2C%22username%22%3A%22yamatt%22%7D%2C%22committer%22%3A%7B%22name%22%3A%22Matthew+Copperwaite%22%2C%22email%22%3A%22mattcopp%40gmail.com%22%2C%22username%22%3A%22yamatt%22%7D%2C%22added%22%3A%5B%5D%2C%22removed%22%3A%5B%5D%2C%22modified%22%3A%5B%22README.md%22%5D%7D%2C%22repository%22%3A%7B%22id%22%3A13360557%2C%22name%22%3A%22gitpub%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2Ffreeserver%2Fgitpub%22%2C%22description%22%3A%22A+service+to+allow+anonymous+PubSubHubbub+compliant+subscriptions+to+GitHub+repos%22%2C%22watchers%22%3A1%2C%22stargazers%22%3A1%2C%22forks%22%3A1%2C%22fork%22%3Afalse%2C%22size%22%3A97%2C%22owner%22%3A%7B%22name%22%3A%22freeserver%22%2C%22email%22%3Anull%7D%2C%22private%22%3Afalse%2C%22open_issues%22%3A6%2C%22has_issues%22%3Atrue%2C%22has_downloads%22%3Atrue%2C%22has_wiki%22%3Atrue%2C%22created_at%22%3A1381055743%2C%22pushed_at%22%3A1381057856%2C%22master_branch%22%3A%22master%22%2C%22organization%22%3A%22freeserver%22%7D%2C%22pusher%22%3A%7B%22name%22%3A%22none%22%7D%7D";

var github = require('../subscribers/github/app').app(null, null, function (source_url, body) {
    assert.equal(source_url, "https://github.com/freeserver/gitpub");
    assert.ok(body);
});

describe('POST demo', function(){
  it('should respond with 200', function(done){
    request(github)
        .post('/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(data)
        .expect(200)
        .end(function(err, res){
            done();
        });
    });
})
