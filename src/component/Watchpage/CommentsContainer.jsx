import React, { useEffect, useState } from 'react'
import { COMMENTS_API } from '../../utils/constants'

const CommentsContainer = ({videoId}) => {
  const [commentsList,setCommentsList]=useState([])
  useEffect(()=>{
    if (videoId) fetchComments();

  },[])

  const fetchComments=async ()=>{
   try{
     const comments=await fetch(COMMENTS_API+videoId);
     const json= await comments.json();
     setCommentsList(json?.items || [])
     console.log(json?.items);
     

    }catch (e){
        console.log(e);
        
    }
  }
  
  


  return (
    <div className='Container mt-6  w-full'>
      <h2 className='text-lg font-semibold mb-4'>Comments</h2>
      {commentsList.length==0 ?(
        <p>No comments available. </p>
      ):(
        <div className='space-y-6'>
          {commentsList.map((item)=>{
            const comment=item?.snippet?.topLevelComment?.snippet;
            return(
              <div key={item?.id} className='flex space-x-4 bg-white p-4 rounded shadow-sm'>
               <img
                  src={comment?.authorProfileImageUrl}
                  alt="authorProfile"
                  className='w-10 h-10 rounded-full'
                />

                <div>
                  <div className='text-sm font-semibold text-gray-800'>{comment?.authorDisplayName}</div>
                  <div className=' text-sm mb-2'>{new Date(comment?.publishedAt).toLocaleDateString()}</div>
                  <div className='text-sm text-gray-700' dangerouslySetInnerHTML={{__html:comment?.textDisplay}}></div>
                </div>

              </div>
            )
          })}
        </div>

      )
      
      }
    </div>
  )
}

export default CommentsContainer;