import React, { Component } from 'react';

// props: children, rowSpan, colSpan
export default class Button extends Component {
	// onClick(event) {
	// 	console.log('clicked')
	// }

	render() {
		const { id, children, rowSpan, colSpan, onClickButton } = this.props;

		return (
			<td
				id={id}
				className='button'
				rowSpan={rowSpan || 1}
				colSpan={colSpan || 1}
				onClick={onClickButton}
			>
				{children}
			</td>
		);
	}
}
