const fs = require('fs')

const codeSnippet = require('./src/plugin')
const MarkdownIt = require('markdown-it')
const prism = require('markdown-it-prism')


const md = new MarkdownIt()
    .use(prism)
    .use(codeSnippet)

fs.readFile('./test.md', 'utf8', (err, data) => {
    if (err) throw err;
    const result = md.render(data);
    fs.writeFile('./test.html', result, (err) => {
        if (err) throw err;
    });
})

module.exports = codeSnippet