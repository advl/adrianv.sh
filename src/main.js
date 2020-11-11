import React from 'react'
import {render} from 'ink'
import meow from 'meow'
import BaseApp from 'app/BaseApp'

const cli = meow(`
	Usage
	  $ adrianv.sh

	Options
		--name  Your name

	Examples
	  $ adrianv.sh --name=Jane
	  Hello, Jane
`)

render(React.createElement(BaseApp, cli.flags))
