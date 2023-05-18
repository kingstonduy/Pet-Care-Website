import { useState } from 'react'
import cs from './CommentRating.module.css'

export function CommentRating(){
    
    const [commentValue,setCommentValue] = useState('');

    function handlePostComment(){

    }

    return(
        <div className={cs['hidden_wrap']}>
            <div className={cs['form_Comment']}>
                <h2>Comment Your Feedback!</h2>
                <textarea  className={cs['input_Comment']} value={commentValue} onChange={(e) => setCommentValue(e.target.value) }  
                cols="30" rows="10"></textarea>
                

                <div className={cs['btn_wrap']}>
                    <button  className={cs['btn_cancel']}>Cancel</button>
                    <button className={cs['btn_addCmt']} onClick={handlePostComment}>Add Comment</button>
                </div>

            </div>
        </div>
    )
}