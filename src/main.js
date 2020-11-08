import React from 'react'
import {render} from 'ink'
import meow from 'meow'
import App from 'app/App'

const cli = meow(`
	Usage
	  $ adrianv.sh

	Options
		--name  Your name

	Examples
	  $ adrianv.sh --name=Jane
	  Hello, Jane
`)

render(React.createElement(App, cli.flags))
