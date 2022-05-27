import { React, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AllNews = () => {
  const [expanded, setExpanded] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=3bb8704cfe194767b1653a9999abd6a3"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {news.map((news, index) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <Card key={index} sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  //   action={
                  //     <IconButton aria-label="settings">
                  //       <MoreVertIcon />
                  //     </IconButton>
                  //   }
                  title={news.title}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={news.urlToImage}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {news.description}
                  </Typography>
                </CardContent>
                <FontAwesomeIcon icon={faUser} />
                <CardActions disableSpacing>
                  {/* <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    {/* <ExpandMoreIcon /> */}
                  </ExpandMore>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
        ;
      </Grid>
    </div>
  );
};

export default AllNews;
