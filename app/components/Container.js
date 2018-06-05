import React, { Component } from 'react';

import Button from './Button';
import Display from './Display';

// FIXME: 1+003 display
// TODO: add error handling for invalid math expression, e.g. 3 // 4
export default class Container extends Component {
	constructor() {
		super();
		this.state = {
			mathExpression: '',
			lastInput: '',
			isOn: false,
			isShowingResult: false
		};

		this.onClickClear = this.onClickClear.bind(this);
		this.onClickClearAll = this.onClickClearAll.bind(this);
		this.onClickEvaluate = this.onClickEvaluate.bind(this);
		this.onClickToggle = this.onClickToggle.bind(this);
		this.onClickValue = this.onClickValue.bind(this);
	}

	onClickValue(event) {
		if (!this.state.isOn) {
			return null;
		}

		const value = event.target.textContent;
		let { isShowingResult, mathExpression } = this.state;

		if (isNaN(value)) {
			this.setState(prevState => ({
				lastInput: value,
				mathExpression: prevState.mathExpression + value,
				isShowingResult: false
			}));
		} else {
			mathExpression === '0' ? mathExpression = value : mathExpression += value;

			if (isShowingResult) {
				this.setState({
					lastInput: value,
					mathExpression: value,
					isShowingResult: false
				});
			} else {
				this.setState({
					mathExpression,
					lastInput: value,
					isShowingResult: false
				});
			}
		}
	}

	onClickToggle() {
		const display = this.state.isOn ? '' : '0';

		this.setState(prevState => ({
			isOn: !prevState.isOn,
			mathExpression: display,
			lastInput: display,
			isShowingResult: false
		}));
	}

	onClickClear() {
		if (!this.state.isOn || this.state.isShowingResult) {
			return null;
		}

		const { mathExpression, lastInput } = this.state;
		const newMathExpression = mathExpression.substring(0, mathExpression.length - 1);
		const newlastInput = lastInput.substring(0, lastInput.length - 1);

		this.setState({
			mathExpression: newMathExpression,
			lastInput: newlastInput
		});
	}

	onClickClearAll() {
		if (!this.state.isOn) {
			return null;
		}

		this.setState({
			mathExpression: '',
			lastInput: '',
			isShowingResult: false
		});
	}

	onClickEvaluate() {
		if (!this.state.isOn) {
			return null;
		}

		const result = eval(this.state.mathExpression);

		this.setState({
			mathExpression: result,
			lastInput: '',
			isShowingResult: true
		});
	}

	render() {
		console.log('math', this.state.mathExpression);
		console.log('input', this.state.lastInput);

		return (
			<div id='container'>
				<Display />

				<table className='container-table'>
					<tbody>
						<tr>
							<td colSpan='5' style={{ border: '1px solid black', textAlign: 'right' }}>
								{this.state.mathExpression}
							</td>
						</tr>
						<tr>
							<td colSpan='5' style={{ border: '1px solid black', textAlign: 'right' }}>
								{this.state.lastInput}
							</td>
						</tr>
						<tr>
							<Button  onClickButton={this.onClickClear} colSpan='2'>Backspace</Button>
							<Button onClickButton={this.onClickClearAll} colSpan='2'>AC</Button>
							<Button onClickButton={this.onClickToggle} rowSpan='2'>ON/OFF</Button>
						</tr>
						<tr>
							<Button onClickButton={this.onClickValue} id='7'>7</Button>
							<Button onClickButton={this.onClickValue} id='8'>8</Button>
							<Button onClickButton={this.onClickValue} id='9'>9</Button>
							<Button onClickButton={this.onClickValue}>/</Button>
						</tr>
						<tr>
							<Button onClickButton={this.onClickValue} id='4'>4</Button>
							<Button onClickButton={this.onClickValue} id='5'>5</Button>
							<Button onClickButton={this.onClickValue} id='6'>6</Button>
							<Button onClickButton={this.onClickValue}>*</Button>
							<Button onClickButton={this.onClickEvaluate} rowSpan='3'>=</Button>
						</tr>
						<tr>
							<Button onClickButton={this.onClickValue} id='1'>1</Button>
							<Button onClickButton={this.onClickValue} id='2'>2</Button>
							<Button onClickButton={this.onClickValue} id='3'>3</Button>
							<Button onClickButton={this.onClickValue}>-</Button>
						</tr>
						<tr>
							<Button onClickButton={this.onClickValue} id='0' colSpan='2'>0</Button>
							<Button onClickButton={this.onClickValue}>.</Button>
							<Button onClickButton={this.onClickValue}>+</Button>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
