/**
 * @author: 94
 */
import React from 'react';
import { connect } from 'dva';

const PageDashboard = props => {
  const { Dashboard } = props;
  const { title } = Dashboard;

  return (
    <div>
      { title }
    </div>
  );
};

function mapStateToProps ({ Dashboard, loading }) {
  return {
    Dashboard,
    loading: loading.effects['Dashboard/fetchData'],
  };
}

export default connect(mapStateToProps)(PageDashboard);
