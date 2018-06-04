import React, { Component } from 'react';

import Button from './Button';
import Display from './Display';

export default class Container extends Component {
	constructor() {
		super();
		this.state = {
			operations: [],
			isOn: false
		};

		this.onClickButton = this.onClickButton.bind(this);
		this.onClickToggle = this.onClickToggle.bind(this);
	}

	onClickButton(event) {
		// get value of the corresponding button
		const store = event.target.textContent;

		this.setState(prevState => ({
			operations: [
				...prevState.operations,
				Number(store)
			]
		}));
	}

	onClickToggle() {
		this.setState(prevState => prevState.isOn = !prevState.isOn);
	}

	render() {
		console.log(this.state);

		return (
			<div id='container'>
				<Display />

				<table>
					<tbody>
						<tr>
							<td colSpan='5' style={{ border: '1px solid black' }}>Display</td>
						</tr>
						<tr>
							<Button onClickButton={this.onClickToggle}>ON/OFF</Button>
							<Button colSpan='2'>AC</Button>
							<Button colSpan='2'>Backspace</Button>
						</tr>
						<tr>
							<Button onClickButton={this.onClickButton} id='7'>7</Button>
							<Button id='8'>8</Button>
							<Button id='9'>9</Button>
							<Button>/</Button>
							<Button rowSpan='4'>=</Button>
						</tr>
						<tr>
							<Button id='4'>4</Button>
							<Button id='5'>5</Button>
							<Button id='6'>6</Button>
							<Button>x</Button>
						</tr>
						<tr>
							<Button id='1'>1</Button>
							<Button id='2'>2</Button>
							<Button id='3'>3</Button>
							<Button>-</Button>
						</tr>
						<tr>
							<Button id='0' colSpan='2'>0</Button>
							<Button>.</Button>
							<Button>+</Button>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
