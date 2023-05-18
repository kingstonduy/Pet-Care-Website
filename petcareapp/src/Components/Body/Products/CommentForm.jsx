import { useEffect, useState } from 'react';
import { getCommentByProductId } from '../../apiClient/CommentApi';
import Comment from './Comment'
import cs from './productDetail.module.css'
import { Button, List } from 'antd';


const count =3;

export default function CommentForm({id}){

    const [comments,setComments] = useState([])
     const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    console.log(comments)

    const idProduct = id;
    
    useEffect(() => {
        getCommentsInProduct()
    },[])

    function getCommentsInProduct(){
        getCommentByProductId(idProduct)
            .then(response => getCommentSuccessfully(response))
            .catch(error => console.log(error))
    }

    function getCommentSuccessfully(response){
        const newComments = response.data.sort((a, b) => new Date(b.commentDate).getTime() - new Date(a.commentDate).getTime());
        setInitLoading(false);
        setData(response.data);
        if (newComments.length > 0) {
            setComments(newComments.slice(0, count)); // Initialize the list with the first three items
        } 
        else {
        setComments([]);
        }
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

    const onLoadMore = () => {
        setLoading(true);
        const nextItems = data.slice(comments.length, comments.length + 3); // Get the next three items
        setComments((prev) => [...prev, ...nextItems]); // Append the next items to the current list
        setLoading(false);
    };

    const loadMore =
    !initLoading && !loading && comments.length < data.length ? (
        <div
            style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
            }}
        >
            <Button onClick={onLoadMore}>Load More</Button>
        </div>
    ) : null;

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
                    <List 
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={comments}
                        renderItem={(comment, index) =>{
                            return(
                                <Comment data={comment} />
                            )
                            }}

                    />
                }

                    
            </div>
        </>
           
    )
}