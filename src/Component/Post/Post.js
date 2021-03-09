import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const{id,title,body}=props.post;
    const history= useHistory();
    const showComments =id=>{
            const url =`post/${id}`;
            history.push(url);

    }

    return (
        <div>
            <h1><strong>{id}.</strong>{title}</h1>
            <p>{body}</p>
            <button onClick={()=>showComments(id)}>Show comment</button>
        </div>
    );
};

export default Post;