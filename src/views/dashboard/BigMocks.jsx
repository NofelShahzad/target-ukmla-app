// import React from 'react'

import withAuth from "../../components/withAuth/withAuth";
import withLayout from "../../components/withAuth/withLayout";

function BigMocks() {
  return (
    <>
      <h3 className="my-4 text-center">Dashboard Big Mock</h3>
    </>
  )
}

// export default BigMocks

const AuthenticatedDashboard = withAuth(BigMocks);
const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

export default LayoutAuthenticatedDashboard;