// import React from 'react'

import CommentCard from "../../components/commentCard/CommentCard";
import withAuth from "../../components/withAuth/withAuth";
import withLayout from "../../components/withAuth/withLayout";

function AllComments() {
  return (
    <>
      <div className="container-fluid comments-detail-page">
        <div className='page-title-container'>
          <h2 className="title">Comments</h2>
          <p>Text explaining what these are.</p>
        </div>
      <section className="comments-wrapper">
        <div className="comments-inner-wrapepr">
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
      </section>
      </div>

    </>
  )
}
// const AuthenticatedDashboard = withAuth(AllComments);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;
export default AllComments