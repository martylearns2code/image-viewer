import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import cutie from "./../assets/cutie.jpeg";
import "./Header.css";

class Header extends Component {
  openDropdownMenuHandler() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  render() {
    return (
      <div>
        <header className="app-header">
          <span className="heading">{this.props.heading}</span>
          {this.props.homepage === "true" ? (
            <div>
              <div className="dropdown">
                <span>
                  <IconButton onClick={this.openDropdownMenuHandler}>
                    <img src={cutie} style={{ width: 70, height: 70 }} />
                  </IconButton>
                </span>
                <div id="myDropdown" class="dropdown-content">
                  <a href="#">My Account</a>
                  <hr />
                  <a href="#">Logout</a>
                </div>
              </div>
              <div className="search-container">
                <span>
                  <SearchIcon />
                  <Input
                    type="text"
                    placeholder="Search..."
                    onChange={this.props.searchImages}
                    disableUnderline="true"
                  />
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
        </header>
      </div>
    );
  }
}
export default Header;
