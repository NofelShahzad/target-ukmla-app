// import React from 'react'

import { useEffect, useState } from "react";
import CommentCard from "../../components/commentCard/CommentCard";
import { useAllCommentsHistoryQuery } from "../../redux/features/commentsApi/commentsApiSlice";
import { useSelector } from "react-redux";
// import withAuth from "../../components/withAuth/withAuth";
// import withLayout from "../../components/withAuth/withLayout";

function AllComments() {
  const [allCommentsList,setAllCommentsList] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const { data, error } = useAllCommentsHistoryQuery();

  const authUser = useSelector(state=>state.auth.user);

  useEffect(() => {
    if (data) {
      // console.log("data::",data);
      if (data?.status) {
        setAllCommentsList(data?.comments);
      }
      if (!data?.status) {
        setAllCommentsList([])
      }
    }
    if (error) {
      setAllCommentsList([])
      console.log("error::",error);
    }
    setIsLoading(false);
  }, [data,error]);

  return (
    <>
      <div className="container-fluid comments-detail-page">
        <div className='page-title-container'>
          <h2 className="title">Comments</h2>
          {/* <p>Text explaining what these are.</p> */}
        </div>
        <section className="comments-wrapper">
          <div className="comments-inner-wrapepr">
            {isLoading ? <p>Loading...</p> :
              allCommentsList?.map(comment =>
                <CommentCard key={comment?.id} content={comment} userInfo={authUser} />
              )}
              {!isLoading && allCommentsList.length===0 &&
                <div className="emtpy-mg-container"><p>No comment found!</p></div>
              }
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