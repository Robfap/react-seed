import {connect} from 'react-redux';
import React from 'react';
import * as Actions from '../actions/actions';

const Comp1 = React.createClass({
    render: function () {
        return (
            <div>Component1</div>
        )
    }
});

function mapStateToProps () {
    return {}
}

function mapDispatchToProps (dispatch) {
    return {
        onClick : dispatch(Actions.action1)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp1);