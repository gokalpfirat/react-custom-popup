import React, { Component } from 'react';
import Popup from './Popup';
import './Popup.css';

class PopupContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popups: [
                {
                    id: 1,
                    title: 'Hello',
                    content: <div><h1>Test</h1><hr/><h2>Test 2</h2></div>,
                },
                {
                    id: 2,
                    title: 'This is',
                    content: <div><button>Test Button</button><input/></div>,
                },
                {
                    id: 3,
                    title: 'My',
                    content: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
                },
                {
                    id: 4,
                    title: 'Popup Component!',
                    content: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
                },
            ],
            activePopup: 1
        };
    }

    handleClick = (event) => {
        if (this.testDiv && !this.testDiv.contains(event.target)) {
            this.setState({activePopup: this.state.activePopup + 1});
        }
    };

    handleKeyboard = (event) => {
        if (event.keyCode === 27) {
            this.setState({activePopup: this.state.activePopup + 1});
        }
    };

    closePopup = () => {
        this.setState({activePopup: this.state.activePopup + 1});
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick);
        document.addEventListener("keydown", this.handleKeyboard);
    }

    render() {
        if (this.state.popups.length >= this.state.activePopup) {
            return (
                <div tabIndex='-1' ref={(testDiv) => {
                    this.testDiv = testDiv
                }} className='container' onKeyDown={this.handleClick}>
                    {this.state.popups.map((popup) => <Popup key={popup.id} id={popup.id}
                                                             isActive={this.state.activePopup === popup.id ? true : false}
                                                             title={popup.title}
                                                             onCloseClick = {this.closePopup}
                    >{popup.content}</Popup>)}
                    </div>
            );
        } else {
            document.removeEventListener('mousedown', this.handleClick);
            document.removeEventListener('keydown', this.handleKeyboard);
            return null;
        }
    }
}
export default PopupContainer;