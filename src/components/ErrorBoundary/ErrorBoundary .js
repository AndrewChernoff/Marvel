import React from "react";
import Error from "../Common/Error/Error";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }


    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>An Error Has Occured. Try again later</h2>
                    <Error />
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;