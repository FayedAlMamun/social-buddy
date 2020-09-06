import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const Comments = (props) => {
    console.log(props)
    const useStyles = makeStyles({
        root: {
            background: 'white',
            padding: '20px',
            color:'black',
            width: '100%',
            height:'250px',
            margin:'10px',
            borderRadius:'10px',
            border:'1px solid black',
            boxShadow:'10px 10px 5px gray'
        },
        body:{
            
            width:'500px'
        },
        userImg:{
          width:'50px',
          height:'50px',
          borderRadius:'50%'

        },
        setPadding:{
            padding:'0px 5px'
        }
      });
    const classes = useStyles(); 
    const {postId}=props;
    const [comments,setComment]=useState([])
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[])
    return (
        <div>
            <h3 className={classes.comment} >Comments</h3>
            {
                comments.map((comment)=>{
                    let img=`https://loremflickr.com/320/240?lock=${comment.id}`
                    return ([
                    <div className={classes.root}>
                     <h4><img className={classes.userImg} src={img} alt=""/><span className={classes.imgPadding}>{comment.name}</span></h4>
                    <p><small>email: {comment.email}</small></p>
                    <p className={classes.body}>{comment.body}</p>
                    </div>
                ])      
                }
                )
            }
        </div>
    );
};
export default Comments;