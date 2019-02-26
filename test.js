const fs = require('fs')

const codeSnippet = require('./src/plugin')
const MarkdownIt = require('markdown-it')

const md = new MarkdownIt()
    .use(codeSnippet)

fs.readFile('./test.md', 'utf8', (err, data) => {
    if (err) throw err;
    const result = md.render(data);
    fs.writeFile('./test.html', result, (err) => {
        if (err) throw err;
    });
})