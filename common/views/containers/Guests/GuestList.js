import React from 'react';
import { connect } from 'react-redux';
import Table from '../../components/Table';
import {
  tableColumns as columns,
  tableActions as actions,
  tableLoadingMessage as loadingMessage,
  tableEmptyMessage as emptyMessage,
} from '../../config/guests';


const GuestList = ({
  data,
  isFetching,
  onActionClick,
}) => {
  const props = {
    data,
    isFetching,
    actions,
    columns,
    loadingMessage,
    emptyMessage,
    onActionClick,
  };
  return (<Table {...props} />);
};

GuestList.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
  isFetching: React.PropTypes.bool,
  onActionClick: React.PropTypes.func,
};

const mapStateToProps = state => (
  {
    data: state.guests.items,
    isFetching: state.guests.isFetching,
  }
);


export default connect(
  mapStateToProps,
)(GuestList);
