import React, {Component} from 'react';

class Popup extends Component {
    render() {
        return (
                <div className={this.props.isActive ? 'show' : 'hide'}>
                    <div className='modal'>
                    <div className='modalHeader'>{this.props.title}<span className="close" onClick={this.props.onCloseClick}>&times;</span></div>
                    {this.props.children}
                    <div className='modelFooter'>Goodbye</div>
                    </div>
                </div>
        );
    }
}

export default Popup;