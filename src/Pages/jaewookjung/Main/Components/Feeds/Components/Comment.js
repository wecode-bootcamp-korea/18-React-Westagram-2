import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
    render() {
        return (
            <li>
                <span>{this.props.comment.userName}</span>
                {this.props.comment.commentContent}
            </li>
        );
    }
}

export default Comment;
