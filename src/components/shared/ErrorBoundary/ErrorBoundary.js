import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error, info) {
		// Display fallback UI
		this.setState({
			hasError: true,
		});
		// You can also log the error to an error reporting service
		console.error(error, info);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<div className="Error">
					<h1>Something went wrong.</h1>;
				</div>
			);
		}
		return this.props.children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

ErrorBoundary.defaultProps = {
	children: '',
};

export default ErrorBoundary;
