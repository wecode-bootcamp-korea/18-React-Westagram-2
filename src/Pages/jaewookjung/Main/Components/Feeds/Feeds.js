import React, { Component } from "react";
import "./Feeds.scss";
import Comment from "./Components/Comment";

import littleDog from "../../../../../images/jaewookjung/littleDog.jpg";
import mainDog from "../../../../../images/jaewookjung/mainDog.jpg";

class Feeds extends Component {
    constructor() {
        super();
        this.state = {
            commentInputValue: "",
            opacity: 0.3,
            commentContentList: [],
        };
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/data/commentData.json", {
            method:"GET",
        })
        .then(res => res.json())
        .then(result => this.setState({
            commentContentList : result,
        }))
    }

    commentInputOnchange = async (e) => {
        await this.setState({
            commentInputValue: e.target.value,
        });
        await this.changeBtnColor();
    };

    changeBtnColor = () => {
        this.state.commentInputValue
            ? this.setState({
                  opacity: 1,
              })
            : this.setState({
                  opacity: 0.3,
              });
    };

    paintComment = () => {
        if (this.state.opacity === 1 && this.state.commentInputValue) {
            this.state.commentContentList.push({
                id : this.state.commentContentList.length + 1,
                userName: "hahah",
                content: this.state.commentInputValue,
                isLiked : false
            });
        }
        this.setState({
            commentInputValue: "",
        });
    };

    inputKeypress = async (e) => {
        if (e.key === "Enter") {
            await this.paintComment();
        }
        await this.changeBtnColor();
    };

    render() {
        const {commentContentList} = this.state
        console.log(commentContentList)
        return (
            <section>
                <div className="section_header general_column">
                    <div className="column_left">
                        <img
                            className="left_img img_small"
                            src={littleDog}
                            alt="smallImage"
                        />
                        <div className="left_text">
                            <div className="text_name">{this.props.feedContentData.userName}</div>
                            <div className="text_des">{this.props.feedContentData.userDesc}</div>
                        </div>
                    </div>
                    <div className="column_right">
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>
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
                        좋아요 <span className="likes_num">{this.props.feedContentData.likedNum}</span>개
                    </div>
                    <article>
                        <p className="img_articles">
                            orem ipsum, dolor sit amet consectetur adipisicing
                            elit. Omnis sequi eaque consequatur, maxime
                            asperiores impedit expedita! Est at quidem
                            distinctio doloremque deserunt veritatis facilis a,
                            minima, optio rerum, provident tempora!
                        </p>
                        <button className="show_all_article">더 보기</button>
                    </article>
                    <time className="img_dates">2일전</time>
                    <ul className="comment_box">
                        {commentContentList.map((comment) => {
                            return <Comment key={comment.id} comment={comment} />;
                        })}
                    </ul>
                </div>
                <div className="comments_column">
                    <i className="far fa-smile"></i>
                    <input
                        onKeyPress={this.inputKeypress}
                        onChange={this.commentInputOnchange}
                        value={this.state.commentInputValue}
                        className="comments_text"
                        type="text"
                        placeholder="댓글 달기..."
                    />
                    <button
                        onClick={this.paintComment}
                        style={{ opacity: this.state.opacity }}
                        className="add_comment_btn blue_text"
                        type="button"
                    >
                        게시
                    </button>
                </div>
            </section>
        );
    }
}

export default Feeds;
