# Markdown-it Vuepress Code Snippet Enhanced


## Why use this plugin?

  - Specify your own language :boom:
  - Transclude any part of a file :boom:
  - Line highlighting extended from Vuepress :green_heart:

<br />

## Install

```sh
npm i -D markdown-it-vuepress-code-snippet-enhanced
```

---
<br />

## Setup

In Vuepress `config.js` add the following:

```js
module.exports = {
  markdown: {
    extendMarkdown: md => {
        md.use(require('markdown-it-vuepress-code-snippet-enhanced'))
    }
  }
}
```

You can now import code snippets into your markdown files with the following syntax:

```md
@[code](@/docs/code.js)
@[code lang=ruby transclude={1-1}](@/docs/code.rb)
@[code highlight={1-6} transcludeTag=style](@/docs/code.vue)
@[code highlight={4,9,11-16} transcludeWith=:::](@/docs/code.vue)
```



## Options

### Language
You can specify any language for syntax highlighting as follows:
```md
@[code lang=ruby](@/docs/code.rb)
@[code lang=csharp](@/docs/code.cs)
```
_Vuepress uses prismjs, so for proper syntax highlighting check prism.js docs._

<br/>

### Transclusion
You can transclude a single or multiple parts of a file using `transclude`, `transcludeWith`, or `transcludeTag`.

#### transcludeWith
For transcluding one or **more** parts of a file, specify a unique pattern.
```md
@[code lang=ruby transcludeWith=|_|_|](@/docs/code.rb)
@[code transcludeWith=:::](@/docs/code.js)
@[code transcludeWith=++++](@/docs/code.h)
```
##### Example 1
```rb
require 'lib'
require 'other'

# |_|_|
def hello
  puts 'hello'
  puts 'vue'
end
# |_|_|
```

##### Example 2 (Illustrating multiple transclusions in the same file)
```rb
require 'lib'
require 'other'

# |_|_|
def hello
  puts 'hello'
  puts 'vue'
end
# |_|_|

   ... more code ...

# |_|_|
def goodebye
  puts 'bye...'
end
# |_|_|
```

#### transcludeTag
Useful when working `Vue` single file components.
```md
@[code transcludeTag=template](@/docs/code.vue)
@[code transcludeTag=script](@/docs/code.vue)
@[code transcludeTag=style](@/docs/code.vue)
```

#### transclude
Use a range indicating the `start` and `end` lines. This option is inclusive.
```md
@[code transclude={5-13}](@/docs/code.js)
```


## Sample

### Input Markdown
```
@[code highlight={1-6} transcludeTag=style](@/docs/code.vue)
```

### Source File
```html
<template>
  <div class="component"></div>
</template>

<script>
export default {
  mounted () {
    alert('yay!')
  }
}
</script>

<style lang="scss" scoped>
.component {
  display: flex;
}
</style>
```
### Rendered Output

```css
<style lang="scss" scoped>
.component {
  display: flex;
}
</style>
```
