/* eslint-disable no-undef */
// 此為食譜收藏-（食譜）內容功能區塊

/* eslint-disable react/prop-types */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import '../RecipeListPage.scss';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  alert: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    border: '1px solid',
  },
}));

function CollectionCookbook(props) {
  const { recipe } = props;

  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const deletePost = async () => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/recipes/delete/${recipe.recipe_id}`;
    // eslint-disable-next-line no-unused-vars
    const reponse = await axios.delete(url);
  };

  return (
    <div>
      <div>
        <ul>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <li>
                <Nav>
                  <Nav.Link className="look" href=" ">
                    <Col sm={2}>
                      <img
                        src={recipe.cover_image_src}
                        alt=" "
                      />
                    </Col>
                    <Col sm={8}>
                      <div className="book">
                        <h4>{recipe.name}</h4>
                        <div className={classes.root}>
                          <Avatar
                            alt=" "
                            src={recipe.m__avatar_image_src}
                            className={classes.small}
                          />
                          <p>{recipe.m__name}</p>
                        </div>
                        <p>
                          {recipe.description}
                        </p>
                        <Box
                          display="flex"
                          component="fieldset"
                          borderColor="transparent"
                        >
                          <Typography component="fieldset">食譜評分：</Typography>
                          <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Box>
                      </div>
                    </Col>
                    <Col sm={1}>
                      <Button onClick={deletePost} variant="outline-secondary" size="lg" className="keep1">
                        <h6 className="far">
                          取消收藏
                        </h6>
                      </Button>
                    </Col>
                  </Nav.Link>
                </Nav>
                <hr />
              </li>
            </Tab.Pane>
          </Tab.Content>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(CollectionCookbook);
