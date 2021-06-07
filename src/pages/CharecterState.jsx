import React from 'react'
import { connect } from 'react-redux';

const CharecterState = ({chanterData}) => {

      return (
            <div>
                  <h1>Boys State:  {chanterData}</h1>
                  <hr />
            </div>
      )
}
const mapStateToProps = (state) => {

      return {
		chanterData: state.data.charecter,
	};
}
export default connect(mapStateToProps, null)(CharecterState);
