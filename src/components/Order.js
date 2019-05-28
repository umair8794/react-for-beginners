import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Order extends Component {
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const quantity = this.props.order[key];
        const isAvailable = fish && fish.status === "available";

        if (!fish) {
            return null;
        }

        if (!isAvailable) {
            return <li key={key}>Sorry { fish ? fish.name : 'fish' } is no longer available</li>;
        }

        return <li key={key}>
            { quantity } lbs { fish.name }
            { formatPrice(quantity * fish.price) }
        </li>;
    }

    render () {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((total, orderId) => {
            const fish = this.props.fishes[orderId];
            const quantity = this.props.order[orderId];
            const isAvailable = fish && fish.status === "available";

            if (isAvailable) {
                return total + (fish.price * quantity);
            }

            return total;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Your Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div className="total">
                    Total:
                    <strong>{ formatPrice(total) }</strong>
                </div>
            </div>
        );
    }
}

export default Order;