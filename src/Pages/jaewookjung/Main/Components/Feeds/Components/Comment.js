import React, { Component } from "react";

class Comment extends Component {
    render() {
        return this.props.contentList.map((comment, idx) => (
            <li key={idx}>{comment}</li>
        ));
    }
}

export default Comment;
