import React, { Component } from "react";
import "./Feeds.scss";
import FeedHeader from "./Components/FeedHeader/FeedHeader";
import FeedMain from "./Components/FeedMain/FeedMain";

class Feeds extends Component {
    componentDidMount = () => {
        fetch("data/commentData.json", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((result) =>
                this.setState({
                    commentContentList: result,
                })
            );
    };

    render() {
        const { feedData } = this.props;
        return (
            <section>
                <FeedHeader feedHeaderData={feedData} />
                <FeedMain feedMainData={feedData} />
            </section>
        );
    }
}

export default Feeds;
