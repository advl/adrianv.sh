const React = require('react')
const importJsx = require('import-jsx')
const {render} = require('ink')
const meow = require('meow')

const ui = importJsx('./ui')

const cli = meow(`
	Usage
	  $ adrianv.sh

	Options
		--name  Your name

	Examples
	  $ adrianv.sh --name=Jane
	  Hello, Jane
`)

render(React.createElement(ui, cli.flags))
