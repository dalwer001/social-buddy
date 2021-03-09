import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const{id,title,body}=props.post;
    const history= useHistory();
    const showComments =id=>{
            const url =`post/${id}`;
            history.push(url);

    }
const divStyle={
    backgroundColor:'goldenrod',
    border:'2px solid red',
    borderRadius:'10px',
    margin:'10px',
    padding:'10px'
}
    return (
        <div style={divStyle}>
            <h1><strong>{id}.</strong>{title}</h1>
            <p>{body}</p>
            <button onClick={()=>showComments(id)}>Show comment</button>
        </div>
    );
};

export default Post;