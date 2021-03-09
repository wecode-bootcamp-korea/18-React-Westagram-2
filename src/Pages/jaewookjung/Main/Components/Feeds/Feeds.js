import React, { Component } from "react";
import "./Feeds.scss";
import Comment from "./Components/Comment";

class Feeds extends Component {
    constructor() {
        super();
        this.state = {
            commentInputValue: "",
            opacity: 0.3,
            commentContentlist: ["one", "two", "three"],
        };
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
            this.state.commentContentlist.push(this.state.commentInputValue);
        }
        this.setState({
            commentInputValue: "",
        });
    };

    inputKeypress = (e) => {
        if (e.key === "Enter") {
            this.paintComment();
        }
    };

    render() {
        return (
            <section>
                <div className="section_header general_column">
                    <div className="column_left">
                        <img
                            className="left_img img_small"
                            src="https://images.unsplash.com/photo-1530041539828-114de669390e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt="smallImage"
                        />
                        <div className="left_text">
                            <div className="text_name">Doggy</div>
                            <div className="text_des">dog</div>
                        </div>
                    </div>
                    <div className="column_right">
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <img
                    className="main_img"
                    src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="mainImage"
                />
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
                        좋아요 <span className="likes_num">0</span>개
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
                        <Comment contentList={this.state.commentContentlist} />
                    </ul>
                </div>
                <div className="comments_column">
                    <i className="far fa-smile"></i>
                    <input
                        onKeyPress={this.inputKeypress}
                        value={this.state.commentInputValue}
                        onChange={this.commentInputOnchange}
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
