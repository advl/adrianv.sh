# adrianv.sh

My resume as a CLI.

## Run

Run remotely
```bash
$ npx adrianv.sh
```

Run locally
```
git clone ....
npm i
npm run start
```

## CLI

<!----
```
$ adrianv.sh --help

  Usage
    $ adrianv.sh

  Options
    --name  Your name

  Examples
    $ adrianv.sh --name=Jane
    Hello, Jane

```
--->

## VIM Settings

For some reason, my vim enabled tsserver linter, just disable it with

`:let g:ale_linters={'javascript':['eslint']}`

`:ALEReset`
