import React, { Component } from "react";
import "./Recommend.scss";
import littleDog from "../../../../../../images/jaewookjung/littleDog.jpg";

class Recommend extends Component {
    render() {
        return (
            <div className="recommend_info general_column">
                <div className="column_left">
                    <img
                        className="recommend_img img_small"
                        src={littleDog}
                        alt="recommendImage"
                    />
                    <div className="recommend_text">
                        <div className="recommend_id">
                            {this.props.recommendList.name}
                        </div>
                        <div className="recommend_name">회원님을 위한 추천</div>
                    </div>
                </div>
                <button className="column_right blue_text" type="button">
                    팔로우
                </button>
            </div>
        );
    }
}

export default Recommend;
