import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const Post = (props) => {
  const { id, title } = props.post;
  const useStyles = makeStyles({
    root: {
      background: 'black',
      padding: '0 30px',
      color: 'white',
      width: '100%',
      height: '180px',
      margin: '15px',
      borderRadius: '10px',
      boxShadow: '10px 10px 5px #aaa',
    },
  });
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <h4>Post Id: {id}</h4>
      <h3>Title:  {title}</h3>
      <Link to={`/details/${id}`}>
        <Button variant="contained" color="primary">
          See Details
             </Button>
      </Link>
    </Box>
  );
};

export default Post;