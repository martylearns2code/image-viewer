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
                    <img
                      src={cutie}
                      style={{ width: 70, height: 70 }}
                      alt="cutie"
                    />
                  </IconButton>
                </span>
                <div id="myDropdown" class="dropdown-content">
                  <button
                    className="headerButton"
                    onClick={this.props.goToProfilePage}
                  >
                    My Account
                  </button>
                  <hr />
                  <button
                    className="headerButton"
                    onClick={this.props.homeLogout}
                  >
                    Logout
                  </button>
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
