import React from 'react';
class LoginHeader extends React.Component {
    render() {
        return (
            <div className="center">
                <h1>
                    <i className="ace-icon fa fa-leaf green"></i>
                    <span className="red">Marvel </span>
                    <span className="white" id="id-text2">Reports</span>
                </h1>
                <h4 className="blue" id="id-company-text">&copy; Global Logic</h4>
            </div>
        )
    }
}
export default LoginHeader