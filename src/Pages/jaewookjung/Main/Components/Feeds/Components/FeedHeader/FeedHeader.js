import React, { Component } from "react";
import "./FeedHeader.scss";

import littleDog from "../../../../../../../images/jaewookjung/littleDog.jpg";

class FeedHeader extends Component {
    render() {
        return (
            <div className="section_header general_column">
                <div className="column_left">
                    <img
                        className="left_img img_small"
                        src={littleDog}
                        alt="smallImage"
                    />
                    <div className="left_text">
                        <div className="text_name">
                            {this.props.feedHeaderData.userName}
                        </div>
                        <div className="text_des">
                            {this.props.feedHeaderData.userDesc}
                        </div>
                    </div>
                </div>
                <div className="column_right">
                    <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>
        );
    }
}

export default FeedHeader;
