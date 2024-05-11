// import React from 'react'

import withAuth from "../../components/withAuth/withAuth";
import withLayout from "../../components/withAuth/withLayout";

function Dashboard() {
  return (
    <div style={{ height: '100vh', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
      Dashboard
    </div>
  )
}
const AuthenticatedDashboard = withAuth(Dashboard);
const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

export default LayoutAuthenticatedDashboard;
// export default withLayout(withAuth(Dashboard));