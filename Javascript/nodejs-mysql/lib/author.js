var db = require('./db.js');
var template = require('./template.js');
var qs = require('querystring');
var url = require('url');
var sanitizehtml = require('sanitize-html');

exports.home = (request, response) => {
    db.query(`SELECT * FROM topic`, (error, topics) => {
        if (error) {
            throw error;
        }
        db.query(`SELECT * FROM author`, (error2, authors) => {
            if (error2) {
                throw error2;
            }
            var title = 'author';
            var list = template.list(topics);
            var html = template.HTML(title, list,
                `
                ${template.authorTable(authors)}
                <style>
                    table {
                        border-collapse: collapse;
                    }
                    td {
                        border: 1px solid black;
                    }
                </style>
                <form action="authorCreate" method="post">
                    <p>
                        <input type="text" name="name" placeholder="name">
                    </p>
                    <p>
                        <textarea name="profile" placeholder="profile"></textarea>
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
                `,
                ``
            );
            response.writeHead(200);
            response.end(html);
        });
    });
}

exports.createProcess = (request, response) => {
    var body = '';
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        db.query(
        `INSERT INTO author(name, profile) VALUES(?, ?)`
        , [post.name, post.profile], (error, result) => {
            if(error) {
                throw error;
            }
            response.writeHead(302, {Location: `/author`});
            response.end();
        });
    });
}

exports.update = (request, response) => {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    db.query(`SELECT * FROM topic`, (error, topics) => {
        if (error) {
            throw error;
        }
        db.query(`SELECT * FROM author`, (error2, authors) => {
            if (error2) {
                throw error2;
            }
            db.query(`SELECT * FROM author WHERE id=?`, [queryData.id], (error3, author) => {
                if (error3) {
                    throw error3;
                }
                var title = 'author';
                var list = template.list(topics);
                var html = template.HTML(title, list,
                `
                ${template.authorTable(authors)}
                <style>
                    table {
                        border-collapse: collapse;
                    }
                    td {
                        border: 1px solid black;
                    }
                </style>
                <form action="authorUpdateProcess" method="post">
                    <p>
                        <input type="hidden" name="id" value="${queryData.id}">
                    </p>
                    <p>
                    <input type="text" name="name" value="${sanitizehtml(author[0].name)}" placeholder="name">
                    </p>
                    <p>
                        <textarea name="profile" placeholder="profile">${sanitizehtml(author[0].profile)}</textarea>
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
                `,
                ``
                );
                response.writeHead(200);
                response.end(html);
            });
        });
    });
}

exports.updateProcess = (request, response) => {
    var body = '';
    request.on('data', (data) => {
        body = body + data;
    });
    request.on('end', () => {
        var post = qs.parse(body);
        console.log(post);
        var id = post.id;
        var name = post.name;
        var profile = post.profile;
        db.query(`UPDATE author SET name=?, profile=? WHERE id=?`, 
        [name, profile, id], (error, result) => {
            if(error) {
                throw error;
            }
            response.writeHead(302, {Location: `/author`});
            response.end();
        });
    });
}

exports.delete = (request, response) => {
    var body = '';
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var id = post.id;
        db.query(`DELETE FROM topic WHERE author_id=?`, [id], (error1, topics) => {
            if (error1) {
                throw error1;
            }
            db.query(`DELETE FROM author WHERE id=?`, [id], (error2, author) => {
                if(error2) {
                    throw error2;
                }
                response.writeHead(302, {Location: `/author`});
                response.end();
            });
        });
    });
}