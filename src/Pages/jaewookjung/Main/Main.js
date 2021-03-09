import React from "react";
import { withRouter } from "react-router-dom";
import "./Main.scss";

import Nav from "./Components/Nav/Nav";
import Feeds from "./Components/Feeds/Feeds";

class MainJaewook extends React.Component {
    render() {
        return (
            <div className="MainPage">
                <Nav />
                <main>
                    <div className="main_container">
                        <div className="main_feed">
                            <div className="main_header">
                                <div className="followers">
                                    <img
                                        className="followers_img img_big"
                                        src="https://images.unsplash.com/photo-1530041539828-114de669390e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        alt="follower1"
                                    />
                                    <div className="followers_name">doggy</div>
                                </div>
                            </div>
                            <Feeds />
                        </div>
                        <aside>
                            <div className="aside_container">
                                <div className="user_info general_column">
                                    <div className="column_left">
                                        <img
                                            className="user_img img_normal"
                                            src="https://images.unsplash.com/photo-1530041539828-114de669390e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                            alt="userImage"
                                        />
                                        <div className="user_text">
                                            <div className="user_id">JJJ</div>
                                            <div className="user_name">
                                                Jaewook Jung
                                            </div>
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
                                    <span className="column_left">
                                        회원님을 위한 추천
                                    </span>
                                    <button
                                        className="column_right"
                                        type="button"
                                    >
                                        모두 보기
                                    </button>
                                </div>
                                <div className="recommend_info general_column">
                                    <div className="column_left">
                                        <img
                                            className="recommend_img img_small"
                                            src="https://images.unsplash.com/photo-1530041539828-114de669390e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                            alt="recommendImage"
                                        />
                                        <div className="recommend_text">
                                            <div className="recommend_id">
                                                friend
                                            </div>
                                            <div className="recommend_name">
                                                회원님을 위한 추천
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="column_right blue_text"
                                        type="button"
                                    >
                                        팔로우
                                    </button>
                                </div>
                                <div className="recommend_info general_column">
                                    <div className="column_left">
                                        <img
                                            className="recommend_img img_small"
                                            src="https://images.unsplash.com/photo-1530041539828-114de669390e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                            alt="recommendImage"
                                        />
                                        <div className="recommend_text">
                                            <div className="recommend_id">
                                                friend
                                            </div>
                                            <div className="recommend_name">
                                                회원님을 위한 추천
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="column_right blue_text"
                                        type="button"
                                    >
                                        팔로우
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>
        );
    }
}

export default withRouter(MainJaewook);
