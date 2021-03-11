import React, { Component } from "react";
import Recommend from "./Components/Recommend";
import "./Aside.scss";
import littleDog from "../../../../../images/jaewookjung/littleDog.jpg";

class Aside extends Component {
    constructor() {
        super();

        this.state = {
            recommendDataList: [],
        };
    }
    componentDidMount() {
        fetch("data/recommendData.json")
            .then((res) => res.json())
            .then((result) =>
                this.setState({
                    recommendDataList: result,
                })
            );
    }
    render() {
        const { recommendDataList } = this.state;
        return (
            <aside>
                <div className="aside_container">
                    <div className="user_info general_column">
                        <div className="column_left">
                            <img
                                className="user_img img_normal"
                                src={littleDog}
                                alt="userImage"
                            />
                            <div className="user_text">
                                <div className="user_id">JJJ</div>
                                <div className="user_name">Jaewook Jung</div>
                            </div>
                        </div>
                        <button
                            className="column_right blue_text"
                            type="button"
                        >
                            전환
                        </button>
                    </div>
                    <div className="recommend_notice general_column">
                        <span className="column_left">회원님을 위한 추천</span>
                        <button className="column_right" type="button">
                            모두 보기
                        </button>
                    </div>
                    {recommendDataList.map((recommendData) => (
                        <Recommend
                            key={recommendData.id}
                            recommendList={recommendData}
                        />
                    ))}
                </div>
            </aside>
        );
    }
}

export default Aside;
