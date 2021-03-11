import React, { Component } from "react";
import "./Header.scss";
import littleDog from "../../../../../images/jaewookjung/littleDog.jpg";

class Header extends Component {
    render() {
        return (
            <div className="followers">
                <img
                    className="followers_img img_big"
                    src={littleDog}
                    alt="follower"
                />
                <div className="followers_name">
                    {this.props.headerData.name}
                </div>
            </div>
        );
    }
}

export default Header;
