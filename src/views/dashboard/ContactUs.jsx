// import React from 'react'

import withAuth from "../../components/withAuth/withAuth";
import withLayout from "../../components/withAuth/withLayout";
import Contactus from "../frontSite/contactus/Contactus";

function ContactUs() {
  return (
    <>
     {/* <h3 className="my-4 text-center">Dashboard contactus</h3> */}
     <Contactus/>
    </>
  )
}

export default ContactUs
// const AuthenticatedDashboard = withAuth(ContactUs);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;