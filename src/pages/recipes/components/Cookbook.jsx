/* eslint-disable no-shadow */
// 此為食譜首頁-右邊（食譜）內容區塊

/* eslint-disable react/prop-types */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { GiFishBucket } from 'react-icons/gi';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Swal from 'sweetalert2';

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

function Cookbook(props) {
  const { recipe } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(3);

  const insertData = async () => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/recipes/collect`;
    // const params = { params: { recipe } };
    // eslint-disable-next-line no-unused-vars
    const reponse = await axios.post(url, { recipe_id: recipe.recipe_id, member_id: 0 });

    Swal.fire({
      position: 'center-center',
      icon: 'success',
      title: '成功收藏',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="animate__animated animate__zoomIn">
      <ul>
        <Tab.Content className="textlistn ">
          <Tab.Pane eventKey="#link1">
            <li>
              <div className="look">
                <Col sm={4}>
                  <Nav>
                    <Nav.Link href={`/recipe/${recipe.recipe_id}`}>
                      <img
                        src={recipe.cover_image_src}
                        alt=" "
                      />
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col sm={8}>
                  <div className="book">
                    <h5>{recipe.name}</h5>
                    <div className={classes.root}>
                      <Avatar
                        alt=" "
                        src={recipe.m__avatar_image_src}
                        className={classes.small}
                      />
                      <p>{recipe.m__name}</p>
                    </div>
                    <p className="ellipsis">
                      {recipe.description}
                    </p>
                    <div className="bucket">
                      <Box
                        display="flex"
                        component="fieldset"
                        borderColor="transparent"
                      >
                        <Typography component="fieldset">食譜評分：</Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          readOnly
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box>
                      <Button onClick={insertData} variant="outline-danger" size="lg" className="keep1">
                        <h6 className="far">
                          <GiFishBucket />
                          收藏
                        </h6>
                      </Button>
                    </div>
                  </div>
                </Col>
              </div>
              <hr />
            </li>
          </Tab.Pane>
        </Tab.Content>
      </ul>
    </div>
  );
}

export default withRouter(Cookbook);
