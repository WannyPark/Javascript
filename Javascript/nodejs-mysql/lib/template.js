var sanitizehtml = require('sanitize-html');

module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <a href="/author">author</a>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(topics){
    var list = '<ul>';
    var i = 0;
    while(i < topics.length){
      list = list + `<li><a href="/?id=${topics[i].id}">${sanitizehtml(topics[i].title)}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  },authorsList:function(authors, author) {
    var list = '';
    var i = 0;
    while(i < authors.length) {
      var selected = '';
      if (authors[i].id === author) {
        selected = ' selected';
      }
      list += `<option value="${authors[i].id}"${selected}>${sanitizehtml(authors[i].name)}</option>`;
      i++;
    }
    return `
    <select name="author">
      ${list}
    </select>
    `
  },authorTable:function(authors) {
    var tag = '<table>';
    var i = 0;
    while (i < authors.length) {
        tag += `
            <tr>
                <td>${sanitizehtml(authors[i].name)}</td>
                <td>${sanitizehtml(authors[i].profile)}</td>
                <td><a href="/authorUpdate?id=${authors[i].id}">update</a></td>
                <td>
                  <form action="/authorDelete" method="post">
                    <p>
                      <input type="hidden" name="id" value="${authors[i].id}">
                      <input type="submit" value="delete">
                    </p>
                  </form>
                </td>
            </tr>
        `
        i++;
    }
    tag += `</table>`
    return tag;
  }
}
