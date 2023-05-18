import { useState } from 'react'
import { postComment } from '../apiClient/CommentApi';
import { useAuth } from '../security/AuthContext';
import cs from './CommentRating.module.css'

export function CommentRating({handleOpenRatingFalse,id}){
    
    const [commentValue,setCommentValue] = useState('');
    const AuthContext = useAuth();

    function handleClickCancel(){
        handleOpenRatingFalse()
    }
    
    function handlePostComment(){
        const comment = 
            {	
                "productId": id,
                "username" : AuthContext.username,
                "commentDescription": commentValue
            }
        console.log(comment)
        postComment(comment)
            .then(() => handleClickCancel())
            .catch(error => console.log(error))
    }

    return(
        <div className={cs['hidden_wrap']}>
            <div className={cs['form_Comment']}>
                <h2>Comment Your Feedback!</h2>
                <textarea  className={cs['input_Comment']} value={commentValue} onChange={(e) => setCommentValue(e.target.value) }  
                cols="30" rows="10"></textarea>
                

                <div className={cs['btn_wrap']}>
                    <button onClick={handleClickCancel}  className={cs['btn_cancel']}>Cancel</button>
                    <button className={cs['btn_addCmt']} onClick={handlePostComment}>Add Comment</button>
                </div>

            </div>
        </div>
    )
}