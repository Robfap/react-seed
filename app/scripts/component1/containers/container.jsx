import {connect} from 'react-redux';
import React from 'react';
import * as Actions from '../actions/actions';
import { Link } from 'react-router';

const Comp1 = React.createClass({
    render: function () {
        return (
            <div style={{padding: '20px'}}>
                <div>Component1</div>
                <button
                    onClick={this.props.onClick}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                    click me {this.props.counter}
                </button>

                <button
                    onClick={this.props.onClick}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    click me {this.props.counter}
                </button>

                <div></div>
                <Link to="/about">About</Link>
            </div>
        )
    }
});

function mapStateToProps (store) {
    return {
        counter : store.comp1.counter
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onClick : () => {
            dispatch(Actions.action1());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp1);