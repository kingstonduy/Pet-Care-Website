import cs from './productDetail.module.css'
import avaUser from '../../../assests/ava/userCommentAva.png'

export default function Comment({data}){

    const {commentDate,commentDescription,fullName,commentId} = data;

    return(
        <div className={cs['comment_wrap']}>
            <div className={cs['avaUser_wrap']}>
                <img  className={cs['avaImg']} src={avaUser} alt="" />
            </div>
            <div className={cs['userDetail_wrap']}>
                <div className={cs['userDetail_top']}>
                    <h4>{fullName}</h4>
                    <span className={cs['comment_date']}>{commentDate.toString()}</span>
                </div>

                <div className={cs['userDetail_DescriptionWrap']}>
                    <p className={cs['userDetail_Description']}>{commentDescription} </p>
                </div>
            </div>
     </div>        
    )
}