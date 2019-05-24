import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
    constructor() {
        super();
        this.goToStore.bind(this);
    }

    storeIdInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        this.props.history.push(`/store/${this.storeIdInput.current.value}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input type="text"
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                    ref={this.storeIdInput}
                />
                <button type="submit">Visit Store ></button>
            </form>
        );
    }
}

export default StorePicker;