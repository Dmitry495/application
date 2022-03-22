import React, { useState } from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography, Grid } from '@mui/material';
import { Favorite, MoreVert, ExpandMore } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import dayjs from "dayjs";
import 'dayjs/locale/ru';

import cn from "classnames";
import s from './styles.module.css';
dayjs.locale('ru')


const ExpandMoreStyle = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
  }));

export const Post = ({image, title, author: {avatar, name, email}, text, created_at }) => {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const dataFormated = dayjs(created_at).format('dddd, MMMM DD YYYY')

  return (
        <Grid container item xs={6} sm={4} md={3}>
            <Card className={s.card} sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar src={avatar && avatar} aria-label="recipe">
                        {!avatar && name.slice(0,1)}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                    }
                    title={email}
                    subheader={dataFormated}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h6" color="text.secondary">
                        {title}
                    </Typography>
                    <Typography variant="body2" noWrap color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions sx={{marginTop: "auto"}} disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Favorite />
                    </IconButton>
                    <ExpandMoreStyle
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-label="show more"
                    >
                        <ExpandMore />
                    </ExpandMoreStyle>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {text}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
  );
};