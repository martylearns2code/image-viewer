import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import Header from "../../common/Header.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Avatar from "@material-ui/core/Avatar";
import cutie from "../../assets/cutie.jpeg";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import Login from "../login/Login";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      likesCount: 7,
      imagesPosted: [],
      imageVisible: "dispBlock",
    };
  }

  //function to handle the event when the likes icon is clicked
  //toggles the favoriteBorder and favorite icons
  //increments and decrements the likes counter on click

  likeClickHandler = () => {
    //function to handle the event when the likes icon is clicked
    let likes = 7;
    if (document.getElementById("favoriteBorder").style.display === "none") {
      document.getElementById("favoriteBorder").style.display = "block";
      document.getElementById("favorite").style.display = "none";
    } else {
      document.getElementById("favorite").style.display = "block";
      document.getElementById("favoriteBorder").style.display = "none";
      likes = 8;
    }
    this.setState({ likesCount: likes });
  };

  //adds or renders comments into the component dynamically
  //appends comments eneterd by the user to the div element

  addCommentClickHandler = () => {
    //function to handle the event to add comments
    let commentAdded = document.createElement("p");
    let commentInput = document.getElementById("comments");
    let comment = "moorthyoninsta: " + commentInput.value;
    commentAdded.innerHTML = comment;
    document.getElementById("comment").appendChild(commentAdded);
    commentInput.value = "";
  };

  //component method happens immediately after the component is mounted
  //makes a api call to instagram api endpoint
  //uses my access token and retrieves the images posted by me
  //stores the images fetched in the state property-imagesPosted

  componentDidMount() {
    //component method
    let data = null;
    let xhr = new XMLHttpRequest();
    let that = this;
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        that.setState({
          imagesPosted: JSON.parse(this.responseText).data,
        });
      }
    });

    let url =
      "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=IGQVJWRkpYTnRPQ3BwMlczNFdJTl9LZAFJxVFRUbVRCZAHUzaUx3dWp1S2tCeUFRWUtHNHY1dXRSUm05VnJtOUYzU0ZAZAX3haenNWMTZABencwcUFDZAS1mclNLclpVREdySzJjaHVqQ0xreDJZAMVNDcnhocwZDZD";

    xhr.open("GET", url);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.send(data);
  }

  //function to facilitate the search functionality on the home page
  //filters the images based on the caption entered by the user
  //displays the matching images
  //displays no images if no match found

  searchImagesHandler = (e) => {
    const state = this.state;
    if (e.target.value === "") {
      for (var i = 0; i < state.imagesPosted.length; i++) {
        document.getElementById(state.imagesPosted[i].id).style.display =
          "block";
      }
    }
    for (var j = 0; j < state.imagesPosted.length; j++) {
      let caption = state.imagesPosted[j].caption;
      let found = caption.search(e.target.value);
      if (found === -1) {
        document.getElementById(state.imagesPosted[j].id).style.display =
          "none";
      }
    }
  };

  //handles the logout event from the home page
  //takes the user back to the login page
  //uses the ReactDom.render to render the login component

  homeLogoutHandler = (e) => {
    ReactDOM.render(
      <span>
        <Login />
      </span>,
      document.getElementById("root")
    );
  };
  profilePageHandler = (e) => {
    alert("going to profile page");
  };

  //renders the component
  //jsx to do the rendering
  //css flex box used to display card container which contains the individual cards

  render() {
    return (
      <div className="header">
        <Header
          heading="Image Viewer"
          homepage="true"
          searchImages={this.searchImagesHandler}
          goToProfilePage={this.profilePageHandler}
          homeLogout={this.homeLogoutHandler}
        />
        <div>
          <div className="card-container">
            {this.state.imagesPosted.map((image) => (
              <Card
                className={this.state.imageVisible}
                key={"image" + image.id}
                id={image.id}
              >
                <CardHeader
                  avatar={<Avatar alt={image.username} src={cutie} />}
                  title={image.username}
                  subheader={<span>{image.timestamp}</span>}
                />
                <CardContent>
                  <img
                    src={image.media_url}
                    className="image-posted"
                    alt={image.caption}
                  />
                  <hr />

                  <p>{image.caption}</p>

                  <div id="comment" />
                  <IconButton
                    onClick={this.likeClickHandler}
                    className={this.state.unlikesToggle}
                  >
                    <FavoriteBorderIcon id="favoriteBorder" />
                    <FavoriteIcon
                      id="favorite"
                      className="unlike"
                      style={{ display: "none" }}
                    />
                    <span>{this.state.likesCount} likes</span>
                  </IconButton>
                  <br />
                  <br />
                  <FormControl>
                    <InputLabel htmlFor="comments" style={{ fontSize: 20 }}>
                      Add a comment
                    </InputLabel>
                    <Input id="comments" type="text" style={{ width: 350 }} />
                  </FormControl>
                  <FormControl>
                    <Button
                      variant="contained"
                      color="primary"
                      className="addComment-button"
                      onClick={this.addCommentClickHandler}
                    >
                      ADD
                    </Button>
                  </FormControl>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
