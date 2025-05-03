import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';

function Course({ course }) {
    const {id, title, description, price, image} = course; //we destructured our courses
  return (
    <>
        <Card className='course'>
            <CardActionArea>
                <CardMedia className='card-media' component="img" image={image} alt={image.title} height="150" />
                <CardContent className='card-content' >
                    <Typography className='card-title' gutterBottom variant="h5" component="div" >{title}</Typography>
                    <div className="tag-beginner">Beginner</div>
                    <Typography className='card-desc' variant="body2"sx={{ color: 'text.secondary'}} >{description}</Typography>
                    <div className='price-and-symb'>
                    <div className='price'>Price</div>
                    <Typography className='course-price' >{price}₺</Typography>
                    </div> 
                    <CardActions className='card-actions'>
                       <Button className='button' size="medium" color="primary" variant='contained'>
                            Buy
                        </Button>
                    </CardActions>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
  )
}

export default Course
