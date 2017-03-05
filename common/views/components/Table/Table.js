import React from 'react';
import styles from './table.css';

// Pure
const isBeforeAction = action => (action.position === 'before');

// Pure
const isNotBeforeAction = action => (!isBeforeAction(action));

// Pure
const renderActionHeader = action => (<th key={action.name} />);

// Pure
const renderDataHeader = column => (<th key={column.name}>{column.title}</th>);

// Pure
const getHeaderColumns = (actions, columns) => {
  const beforeActions = actions.filter(isBeforeAction).map(renderActionHeader);
  const dataHeaders = columns.map(renderDataHeader);
  const afterActions = actions.filter(isNotBeforeAction).map(renderActionHeader);
  return beforeActions.concat(dataHeaders).concat(afterActions);
};

// Pure
const doesActionMeetCondition = row => (
  condition => (row[condition.field] === condition.value)
);

// Pure
const shouldShowAction = (row, action) => (
  typeof action.conditions === 'undefined' ||
  action.conditions.every(doesActionMeetCondition(row))
);

// Pure
const renderAction = row => (
  action => (
    <td className={styles.actionCell} key={action.name}>
      {shouldShowAction(row, action) &&
        action.action(row)
      }
    </td>
  )
);

// Pure
const getBeforeActions = (row, actions) => (
  actions.filter(isBeforeAction).map(renderAction(row))
);

// Pure
const renderColumn = row => (
  column => (<td key={column.name}>{column.callback(row[column.name])}</td>)
);

// Pure
const getDataFields = (row, columns) => (columns.map(renderColumn(row)));

// Pure
const getAfterActions = (row, actions) => (
  actions.filter(isNotBeforeAction).map(renderAction(row))
);

// Pure
const renderRow = (actions, columns) => (
  (row, index) => (
    <tr key={index}>
      { getBeforeActions(row, actions) }
      { getDataFields(row, columns) }
      { getAfterActions(row, actions) }
    </tr>
  )
);

// Pure
const getRows = (rows, actions, columns, onActionClick) => (
  rows.map(renderRow(actions, columns, onActionClick))
);

const Table = ({ columns,
  data,
  actions,
  isFetching,
  emptyMessage,
  loadingMessage,
  onActionClick,
}) => {
  const isLoading = () => (isFetching && data.length === 0);

  const hasNoData = () => (!isFetching && data.length === 0);

  const shouldShowTable = () => (data.length > 0);

  return (
    <div>
      {isLoading() &&
        <h2>{loadingMessage}</h2>
      }
      {hasNoData() &&
        <h2>{emptyMessage}</h2>
      }
      {shouldShowTable() &&
        <table className={styles.table}>
          <thead>
            <tr>
              {getHeaderColumns(actions, columns)}
            </tr>
          </thead>
          <tbody>
            {getRows(data, actions, columns, onActionClick)}
          </tbody>
        </table>
      }
    </div>
  );
};

Table.propTypes = {
  columns: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    title: React.PropTypes.string,
    callback: React.PropTypes.func,
  })),
  actions: React.PropTypes.arrayOf(React.PropTypes.shape({
    content: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element,
      React.PropTypes.array,
    ]),
    action: React.PropTypes.func,
  })),
  data: React.PropTypes.arrayOf(React.PropTypes.object),
  isFetching: React.PropTypes.bool,
  emptyMessage: React.PropTypes.string,
  loadingMessage: React.PropTypes.string,
  onActionClick: React.PropTypes.func,
};

export default Table;
