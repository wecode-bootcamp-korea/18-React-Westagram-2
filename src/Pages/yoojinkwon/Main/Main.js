import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CommentList from './CommentList';
import feedimg from '../../../images/yoojinkwon/feedimg.jpg'
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
            id : Date.now() 
        };

        this.setState(state => ({
            commentList : state.commentList.concat(newComment),
            comment : ""
        }))
    }

    render() {
        return (
        <div className="MainYoojin">
        <header>
        <div id="headerLine"></div>
        <div className="headerElements">
            <h3>Westagram</h3>
            <input type="text" placeholder="검색" />
            <div className="headerIcon">
                <svg aria-label="홈" className="_8-yf5 0" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
                <svg aria-label="Direct" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>    
                <svg aria-label="사람 찾기" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path clip-rule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fill-rule="evenodd"></path></svg>    
                <svg aria-label="활동 피드" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>    
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
                        <svg aria-label="옵션 더 보기" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
                    </div>

                    <img className="articleMainImg" alt="wconceptkorea-feedimg" src={feedimg} />
                    
                    <section className="mainFeed">
                        <div className="articleIcon">
                            <div className="articleIconLeft">
                                <svg className="heartChangeColor _8-yf5" aria-label="좋아요" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                <svg aria-label="댓글 달기" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                                <svg aria-label="게시물 공유" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                            </div>
                            <div className="articleIconRight">
                                <svg aria-label="저장" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                            </div>
                        </div>
                        <div><a id="likeUsername" href="https://www.instagram.com/im_just_twentyseven/">im_just_twentyseven</a>님 <span id="likeUsernames">여러 명</span>이 좋아합니다</div><br />
                        <span className="mention"><a id="mentionUsername" className="feedUsername" href="https://www.instagram.com/wconceptkorea/">wconceptkorea</a></span><br />
                        <span className="mention">RECTO 21SS</span><br />
                        <span className="mention">모던하면서 미니멀한 분위기에</span><br />
                        <span className="mention">렉토 만의 미학과 꿈으로 표현한 21SS 컬렉션을 소개합니다</span><br /><br />
                        <span className="mention">*프로필 링크를 클릭하시면 관련된 더 많은 상품을 보실 수 있습니다 :)</span><br /><br />
                        <span className="mention"><a className="hashtag" href="https://www.instagram.com/explore/tags/wconcept/">#wconcept</a>&nbsp;<a className="hashtag" href="https://www.instagram.com/explore/tags/w%EC%BB%A8%EC%85%89/">#W컨셉</a></span>
                        
                        <CommentList commentList={this.state.commentList} />
                        
                    </section>
                    <section className="commentBox">
                        <svg aria-label="이모티콘" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
                        <input className="commentInput" placeholder="댓글 달기..." onChange={this.handleComment} value={this.state.comment} />
                        <button className="commentButton" onClick={this.handleList} style={{opacity: this.state.comment.length >= 1 ? "1" : "0.5"}}>게시</button>
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