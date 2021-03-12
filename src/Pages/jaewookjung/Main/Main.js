import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Feeds from "./Components/Feeds/Feeds";
import Aside from "./Components/Aside/Aside";
import Header from "./Components/Header/Header";

import "./Main.scss";

class MainJaewook extends Component {
    constructor() {
        super();
        this.state = {
            feedDataList: [],
            headerDataList: [],
        };
    }
    componentDidMount = () => {
        fetch("data/feedsData.json", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((result) =>
                this.setState({
                    feedDataList: result,
                })
            );
        fetch("data/headerData.json", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((result) =>
                this.setState({
                    headerDataList: result,
                })
            );
    };
    render() {
        const { feedDataList, headerDataList } = this.state;
        return (
            <div className="MainPage">
                <Nav />
                <main>
                    <div className="main_container">
                        <div className="main_feed">
                            <div className="main_header">
                                {headerDataList.map((data) => (
                                    <Header key={data.id} headerData={data} />
                                ))}
                            </div>
                            {feedDataList.map((data) => {
                                return <Feeds key={data.id} feedData={data} />;
                            })}
                        </div>
                        <Aside />
                    </div>
                </main>
            </div>
        );
    }
}

export default withRouter(MainJaewook);
