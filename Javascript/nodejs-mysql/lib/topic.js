var db = require('./db.js');
var template = require('./template.js');
var url = require('url');
var qs = require('querystring');
var sanitizehtml = require('sanitize-html');

exports.home = (request, response) => {
    db.query(`SELECT * FROM topic`, (error, topics) => {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = template.list(topics);
        var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
    });
}

exports.page = (request, response) => {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    db.query(`SELECT * FROM topic`, (error, topics) => {
        if(error) {
            throw error;
        }
        db.query(`SELECT * FROM topic LEFT JOIN author ON topic.author_id=author.id WHERE topic.id=?`
        , [queryData.id], (error2, topic) => {
            if(error2) {
            throw error2;
            }
            var title = topic[0].title;
            var description = topic[0].description;
            var author = topic[0].name;
            var list = template.list(topics);
            var html = template.HTML(title, list,
            `
            <h2>${sanitizehtml(title)}</h2>
            ${sanitizehtml(description)}
            <p>by ${sanitizehtml(author)}</p>
            `,
            `<a href="/create">create</a>
            <a href="/update?id=${queryData.id}">update</a>
            <form action="delete_process" method="post">
                <input type="hidden" name="id" value="${queryData.id}">
                <input type="submit" value="delete">
            </form>`
            );
            response.writeHead(200);
            response.end(html);
        });
    });
}

exports.create = (request, response) => {
    db.query(`SELECT * FROM topic`, (error, topics) => {
        db.query(`SELECT * FROM author`, (error, authors) => {
            var title = 'WEB - create';
            var list = template.list(topics);
            var html = template.HTML(sanitizehtml(title), list,
            `<form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
                <textarea name="description" placeholder="description"></textarea>
            </p>
            ${template.authorsList(authors)}
            <p>
                <input type="submit">
            </p>
            </form>`,
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
        `INSERT INTO topic(title, description, created, author_id) VALUES(?, ?, NOW(), ?)`
        , [post.title, post.description, post.author], (error, result) => {
            if(error) {
                throw error;
            }
            response.writeHead(302, {Location: `/?id=${result.insertId}`});
            response.end();
        });
    });
}

exports.update = (request, response) => {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    db.query(`SELECT * FROM topic`, (error, topics) => {
        if(error) {
            throw error;
        }
        db.query(`SELECT * FROM topic WHERE id=?`, [queryData.id], (error2, result) => {
            if(error2) {
            throw error2;
            }
            var author = result[0].author_id;
            db.query(`SELECT * FROM author`, (error, authors) => {
            var id = result[0].id;
            var title = result[0].title;
            var description = result[0].description;
            var list = template.list(topics);
            var html = template.HTML(sanitizehtml(title), list,
                `
                <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${id}">
                <p><input type="text" name="title" placeholder="title" value="${sanitizehtml(title)}"></p>
                <p>
                    <textarea name="description" placeholder="description">${sanitizehtml(description)}</textarea>
                </p>
                <p>
                    ${template.authorsList(authors, author)}
                </p>
                <p>
                    <input type="submit">
                </p>
                </form>
                `,
                `<a href="/create">create</a> <a href="/update?id=${sanitizehtml(title)}">update</a>`
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
        var id = post.id;
        var title = post.title;
        var description = post.description;
        var author = post.author;
        db.query(`UPDATE topic SET title=?, description=?, author_id=? WHERE id=?`, 
        [title, description, author, id], (error, result) => {
            if(error) {
                throw error;
            }
            response.writeHead(302, {Location: `/?id=${id}`});
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
        db.query(`DELETE FROM topic WHERE id=?`, [id], (error, result) => {
            if(error) {
                throw error;
            }
            response.writeHead(302, {Location: `/`});
            response.end();
        });
    });
}