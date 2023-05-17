import { useEffect, useState } from 'react';
import { getCommentByProductId } from '../../apiClient/CommentApi';
import Comment from './Comment'
import cs from './productDetail.module.css'


export default function CommentForm({id}){

    const [comments,setComments] = useState([])

    const idProduct = id;
    
    useEffect(() => getCommentsInProduct(),[])

    function getCommentsInProduct(){
        getCommentByProductId(idProduct)
            .then(response => getCommentSuccessfully(response))
            .catch(error => console.log(error))
    }

    function getCommentSuccessfully(response){
        console.log(response.data)
        setComments(response.data)
    }

    function handleOnChangeSortComment(e) {
        if (e.target.value === 'newest') {
          const newComments = comments.sort((a, b) => new Date(b.commentDate).getTime() - new Date(a.commentDate).getTime());
          setComments([...newComments]);
        } else if (e.target.value === 'oldest') {
          const newComments = comments.sort((a, b) => new Date(a.commentDate).getTime() - new Date(b.commentDate).getTime());
          setComments([...newComments]);
        }
      }

    return (
        <>
            {comments.length > 0 &&
            
            <div className={cs['Review_titleWrap']}>
                <h2 className={cs['Review_title']}>Review from others</h2>

                <div className={cs['Select_filterWrap']}>
                    <p>Filter by</p>
                    <select onChange={handleOnChangeSortComment} className={cs['select_inputFilter']}>
                    
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>
            }

            <div className={cs['commentForm_wrap']}>
                
                {
                    comments.length > 0 && comments.map( comment => (
                        <Comment data={comment} />
                    ))
                }

                {/* <Comment/> */}
                    
            </div>
        </>
           
    )
}