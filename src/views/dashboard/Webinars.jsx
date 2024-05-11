// import React from 'react'
import withAuth from '../../components/withAuth/withAuth';
import withLayout from '../../components/withAuth/withLayout';

function Webinars() {
    return (
        <>
        <h3 className="my-4 text-center">Dashboard Webinars</h3>
        
        </>
    )
}

// export default Webinars

const AuthenticatedDashboard = withAuth(Webinars);
const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

export default LayoutAuthenticatedDashboard;