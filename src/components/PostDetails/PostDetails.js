import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const useStyles = makeStyles({
        root:{
            background:'white',
            height:'250px',
            boxShadow:'10px 10px 5px #aaa',
            borderRadius:'10px'
        },
        body: {
          textAlign:'left',
          width:'500px'
        },
      });
    const classes = useStyles(); 
    const {postId}=useParams()
    const [post,setPost]=useState({})
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))},[])
    return (
        <Container fixed>
            <div className={classes.root}>
            <h3>Title: {post.title}</h3>
            <p className={classes.body}>{post.body}</p>
            </div>
            <Comments  postId={postId}></Comments>
        </Container>
    );
};

export default PostDetails;