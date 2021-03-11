import React, { Component } from 'react';
import './CommentList.scss';

class CommentList extends Component {
    render() {
        return (
            <ul className="commentul" >
                {this.props.commentList.map(list => (
                    <li key={list.id}> <b>im_just_twentyseven</b> {list.comment} </li>
                ))}
            </ul>
        );
    }
}

export default CommentList;