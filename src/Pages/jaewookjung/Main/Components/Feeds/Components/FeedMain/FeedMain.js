import React, { Component } from "react";
import Comment from "../Comment/Comment";
import "./FeedMain.scss";

import mainDog from "../../../../../../../images/jaewookjung/mainDog.jpg";

class FeedMain extends Component {
    constructor() {
        super();
        this.state = {
            commentInputValue: "",
            commentContentList: [],
        };
    }
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

    commentInputOnChange = (e) => {
        this.setState({
            commentInputValue: e.target.value,
        });
    };

    paintComment = () => {
        if (this.state.commentInputValue) {
            this.setState((prevState) => ({
                commentContentList: [
                    ...prevState.commentContentList,
                    {
                        id: prevState.commentContentList.length + 1,
                        userName: "hahah",
                        content: this.state.commentInputValue,
                        isLiked: false,
                    },
                ],
            }));
        }
        this.setState({
            commentInputValue: "",
        });
    };

    inputKeypress = async (e) => {
        if (e.key === "Enter") {
            await this.paintComment();
        }
    };
    render() {
        const { commentContentList } = this.state;
        const { feedMainData } = this.props;
        return (
            <div>
                <img className="main_img" src={mainDog} alt="mainImage" />
                <div className="img_contents">
                    <div className="img_icons general_column">
                        <div className="img_column_left">
                            <i className="far fa-heart"></i>
                            <i className="far fa-comment"></i>
                            <i className="far fa-paper-plane"></i>
                        </div>
                        <div className="img_column_right">
                            <i className="far fa-bookmark"></i>
                        </div>
                    </div>
                    <div className="img_likes">
                        좋아요{" "}
                        <span className="likes_num">
                            {feedMainData.likedNum}
                        </span>
                        개
                    </div>
                    <article>
                        <p className="img_articles">
                            {feedMainData.mainImgDesc}
                        </p>
                        <button className="show_all_article">더 보기</button>
                    </article>
                    <time className="img_dates">2일전</time>
                    <ul className="comment_box">
                        {commentContentList.map((comment) => {
                            return (
                                <Comment key={comment.id} comment={comment} />
                            );
                        })}
                    </ul>
                </div>
                <div className="comments_column">
                    <i className="far fa-smile"></i>
                    <input
                        onKeyPress={this.inputKeypress}
                        onChange={this.commentInputOnChange}
                        value={this.state.commentInputValue}
                        className="comments_text"
                        type="text"
                        placeholder="댓글 달기..."
                    />
                    <button
                        onClick={this.paintComment}
                        className={
                            this.state.commentInputValue
                                ? "add_comment_btn add_comment_btn_able blue_text"
                                : "add_comment_btn add_comment_btn_disable blue_text"
                        }
                        type="button"
                    >
                        게시
                    </button>
                </div>
            </div>
        );
    }
}

export default FeedMain;
