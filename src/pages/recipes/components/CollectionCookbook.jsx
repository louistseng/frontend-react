/* eslint-disable no-undef */
// 此為食譜收藏-（食譜）內容功能區塊

/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button, Nav, Col, Tab,
} from 'react-bootstrap';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import '../RecipeListPage.scss';

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
              <li className="look">
                <Col lg={3} sm={3}>
                  <Nav>
                    <Nav.Link href={`/recipe/${recipe.recipe_id}`}>
                      <img
                        src={recipe.cover_image_src}
                        alt=" "
                      />
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col lg={7} sm={7}>
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
                <Col lg={{ span: 1, offset: 1 }} sm={1} className="cook-delete">
                  <a href="/recipe-collection">
                    <Button onClick={deletePost} variant="outline-secondary" size="lg" className="keep">
                      <h6 className="far">
                        取消
                      </h6>
                    </Button>
                  </a>
                </Col>
              </li>
              <hr />
            </Tab.Pane>
          </Tab.Content>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(CollectionCookbook);
