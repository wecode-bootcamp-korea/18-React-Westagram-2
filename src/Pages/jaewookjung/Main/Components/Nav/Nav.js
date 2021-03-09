import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav_container">
                    <div className="nav_title">Westagram</div>
                    <div className="nav_search">
                        <div className="search_container">
                            <span className="search_icon">
                                <i className="fas fa-search"></i>
                            </span>
                            <span className="search_span">검색</span>
                            <input
                                className="search"
                                type="text"
                                placeholder="검색"
                            />
                        </div>
                        <button className="cancle_search_btn">
                            <i className="fas fa-times-circle"></i>
                        </button>
                    </div>
                    <div className="nav_icons">
                        <i className="fas fa-home"></i>
                        <i className="far fa-paper-plane"></i>
                        <i className="far fa-compass"></i>
                        <i className="far fa-heart"></i>
                        <i className="fas fa-user-circle"></i>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
