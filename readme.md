# adrianv.sh

My resume as a CLI.

## Run

```bash
$ npx adrianv.sh
```

## CLI

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

## VIM Settings

For some reason, my vim enabled tsserver linter, just disable it with

`:let g:ale_linters={'javascript':['eslint']}`

`:ALEReset`
