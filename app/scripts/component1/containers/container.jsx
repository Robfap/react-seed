import {connect} from 'react-redux';
import React from 'react';
import * as Actions from '../actions/actions';
import { Link } from 'react-router';

const Comp1 = React.createClass({
    render: function () {
        return (
            <div>
                <div>Component1</div>
                <button type="submit" onClick={this.props.onClick} >click me</button>
                <div>{this.props.counter}</div>
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