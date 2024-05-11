// import React from 'react'
import withAuth from '../../components/withAuth/withAuth'
import withLayout from '../../components/withAuth/withLayout'

function QuestionsBank() {
    return (
        <>
             <h3 className="my-4 text-center">Dashboard Question Bank</h3>
        </>
    )
}

// export default withLayout(withAuth(QuestionsBank))

const AuthenticatedDashboard = withAuth(QuestionsBank);
const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

export default LayoutAuthenticatedDashboard;