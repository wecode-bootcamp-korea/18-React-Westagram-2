import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import uuid from 'react-uuid'
import CommentList from './CommentList';
import feedimg from '../../../images/yoojinkwon/feedimg.jpg'

import {ReactComponent as Home} from "./Svg/home.svg"
import {ReactComponent as Direct} from "./Svg/direct.svg"
import {ReactComponent as Finduser} from "./Svg/finduser.svg"
import {ReactComponent as Activityfeed} from "./Svg/activityfeed.svg"
import {ReactComponent as Moreoption} from "./Svg/moreoption.svg"
import {ReactComponent as Heart} from "./Svg/heart.svg"
import {ReactComponent as Comment} from "./Svg/comment.svg"
import {ReactComponent as Share} from "./Svg/share.svg"
import {ReactComponent as Save} from "./Svg/save.svg"
import {ReactComponent as Emoji} from "./Svg/emoji.svg"

import './Main.scss';

class MainYoojin extends Component {
    constructor(){
        super();
        this.state={
            comment : "",
            commentList : [],
        }
    }

    handleComment = (e) => {
        this.setState({
            comment : e.target.value
        }) 
    }

    handleList = () => {
        if(this.state.comment.length === 0){
            return;
        }

        const newComment = {
            comment : this.state.comment,
            id : uuid() 
        };

        this.setState(state => ({
            commentList : state.commentList.concat(newComment),
            comment : ""
        }))
    }

    render() {
        const {handleComment, handleList} = this;
        const {comment, commentList} = this.state;
        
        return (
        <div className="MainYoojin">
        <header>
        <div id="headerLine"></div>
        <div className="headerElements">
            <h3>Westagram</h3>
            <input type="text" placeholder="검색" />
            <div className="headerIcon">
                <Home />
                <Direct />
                <Finduser />
                <Activityfeed />
                <img id="myProfileImg" alt="im_just_twentyseven 프로필 사진" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/120594132_193261075520027_3098936031752197669_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=sH7Yl0hkEqcAX_zqbvc&amp;tp=1&amp;oh=297c65b909d8bada7072d294700890ae&amp;oe=6060AC7A" />
            </div>
        </div>
        </header>
        <main>
            <div className="leftside">
                <div className="storyBox">
                    <div className="firststory">
                        <img className="storyProfileImg" alt="im_just_twentyseven 프로필 사진" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/120594132_193261075520027_3098936031752197669_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=sH7Yl0hkEqcAX_zqbvc&amp;tp=1&amp;oh=297c65b909d8bada7072d294700890ae&amp;oe=6060AC7A" />
                        <span className="storyUsername">내 스토리</span>
                    </div>
                </div>
                <article className="firstArticle">
                    <div className="articleHeader">
                        <img className="feedProfileImg" alt="wconceptkorea 프로필 사진" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/101628247_1188677631482684_5624822529576140800_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=VGo1OoylFGIAX-5tK01&tp=1&oh=72ce969df35392d82dfb28bf07b2d883&oe=6062AE0C" />
                        <a className="feedUsername" href="https://www.instagram.com/wconceptkorea/">wconceptkorea</a>
                        <Moreoption />
                    </div>

                    <img className="articleMainImg" alt="wconceptkorea-feedimg" src={feedimg} />
                    
                    <section className="mainFeed">
                        <div className="articleIcon">
                            <div className="articleIconLeft">
                                <Heart />
                                <Comment />
                                <Share />
                            </div>
                            <div className="articleIconRight">
                                <Save />
                            </div>
                        </div>
                        <div><a id="likeUsername" href="https://www.instagram.com/im_just_twentyseven/">im_just_twentyseven</a>님 <span id="likeUsernames">여러 명</span>이 좋아합니다</div><br />
                        <span className="mention"><a id="mentionUsername" className="feedUsername" href="https://www.instagram.com/wconceptkorea/">wconceptkorea</a></span><br />
                        <span className="mention">RECTO 21SS</span><br />
                        <span className="mention">모던하면서 미니멀한 분위기에</span><br />
                        <span className="mention">렉토 만의 미학과 꿈으로 표현한 21SS 컬렉션을 소개합니다</span><br /><br />
                        <span className="mention">*프로필 링크를 클릭하시면 관련된 더 많은 상품을 보실 수 있습니다 :)</span><br /><br />
                        <span className="mention"><a className="hashtag" href="https://www.instagram.com/explore/tags/wconcept/">#wconcept</a>&nbsp;<a className="hashtag" href="https://www.instagram.com/explore/tags/w%EC%BB%A8%EC%85%89/">#W컨셉</a></span>
                        
                        <CommentList commentList={commentList} />
                        
                    </section>
                    <section className="commentBox">
                        <Emoji />
                        <input className="commentInput" placeholder="댓글 달기..." onChange={handleComment} value={comment} />
                        <button className="commentButton" onClick={handleList} style={{opacity: comment.length ? "1" : "0.5"}}>게시</button>
                    </section>
                </article>
                </div>
                <div className="rightside">
                <article className="sidebar"></article>
            </div>
        </main>

        </div>
        );
    }
}

export default withRouter(MainYoojin);