import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { homeAction } from '../store/actions';
import { POSITION } from '../store/actions/actionTypes';

const Bio = ({setPosition, positionData}) => {

    useEffect(() => {
        setPosition()
	}, [setPosition]);

    return (
        <h1>Hello World</h1>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
	return {
		positionData: state.data.position,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPosition: () => dispatch(homeAction(POSITION)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Bio);