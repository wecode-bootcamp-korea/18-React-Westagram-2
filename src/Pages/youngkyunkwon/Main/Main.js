import React from 'react';
import './Main.scss';
import '../../../Styles/common.scss';
import '../../../Styles/reset.scss';
import 사진1 from '../../../images/youngkyunkwon/사진1.jpg';
import 사진2 from '../../../images/youngkyunkwon/사진2.jpg';
import 사진3 from '../../../images/youngkyunkwon/사진3.jpg';
import story1 from '../../../images/youngkyunkwon/story1.jpg';
import story2 from '../../../images/youngkyunkwon/story2.jpg';
import story3 from '../../../images/youngkyunkwon/story3.jpg';
import story4 from '../../../images/youngkyunkwon/story4.jpg';


class MainYoungkyun extends React.Component {
    constructor() {
        super();
        this.state= {
            value: "",
            commentList: [],
        };
    }

    getValue= (e)=> {
        this.setState({
            value: e.target.value,
        });
    }

    addComment= () => {
        this.setState({
            commentList: this.state.commentList.concat([this.state.value]),
                value: "",
        })
    }

    addCommEnter=(e) => {
        if(e.key === "Enter") {
            this.addComment();
        }
    }

    render() {
        //console.log(getValue);
        return (
            <div className= "MainYoungkyun">
                <nav>
                    <div className= "fixedBar">
                        <span className= "bar">
                            <span className= "navBar">
                        <span className= "barLogo">westagram</span>
                        <span className= "barSearch">
                            <span className= "icon"><i class="fas fa-search"></i></span>
                            <input type= "text" name= "search" placeholder= "검색" className= "search"/>
                        </span>
                        <span className= "barImg">
                            <span class ="homeImg"><i class="fas fa-home"></i></span>
                            <span class ="dmImg"><i class="far fa-paper-plane"></i></span>
                            <span class ="compassImg"><i class="far fa-compass"></i></span>
                            <span class ="heartImg"><i class="far fa-heart"></i></span>
                            <img src= {사진2} alt= "userPic" className= "userPic" />
                            </span>
                        </span>
                        </span>
                    </div>
                </nav>
                <main>
                <div className= "main">
                    <div classNames ="feeds">
                        <div className= "story">
                            <span className= "storyNav">
                            <span className= "storyFirst">
                                <img src= {story1} alt= "story1Pic" className= "storyPic" />
                                <span className= "firstName">artist_jihun</span>
                            </span>
                            <span className= "storySecond">
                                <img src= {story2} alt= "story2Pic" className= "storyPic" />
                                <span className= "secondName">yohee</span>
                            </span>
                            <span className= "storyThird">
                                <img src= {story3} alt= "story3Pic" className= "storyPic" />
                                <span className= "thirdName">laywer</span>
                            </span>
                            <span className= "storyFourth">
                                <img src= {story4} alt= "story4Pic" className= "storyPic" />
                                <span className= "fourthName">dog</span>
                            </span>
                            </span>
                        </div>
                        <article>
                            <header>
                                <div className= "artNav">
                                    <span className="artNavPic"><img src= {사진3} alt= "articleNavPic" /></span>
                                    <span className= "artNavPome">
                                        <span className= "artNavName">pome_louis</span>
                                        <span className= "artNavDetail">이쁜 내새끼</span>
                                    </span>
                                    <span className= "moreInfo"><i class="fas fa-ellipsis-h"></i></span>
                                </div>
                            </header>
                                <img src= {사진1} alt= "articlePic" className= "artPic" />
                                <div className= "artBottom">
                                    <div className= "artBottomImoj">
                                    <span class ="heartImg"><i class="far fa-heart"></i></span>
                                    <span class ="commentImg"><i class="far fa-comment"></i></span>
                                    <span class ="dmImg"><i class="far fa-paper-plane"></i></span>
                                    <span class ="bookmarkImg"><i class="far fa-bookmark"></i></span>
                                    </div>
                                <div className= "like">좋아요58개</div>
                                <div className= "comment">
                                    <div className= "artNavName">pome_louis</div>
                                    <div className= "commentExplain">루이 미용해쭁💇🏻🧖🏻💆🏻나 이뽕??😝😝</div>
                                    <div className= "tag">#꽃단장애견미용실 #강아지미용 #강아지미용실 #예뻐</div>
                                    
                                    <div className= "commentComment"> 댓글7개 모두보기</div>
                                    <div className= "date">1일전</div>
                                    
                                    <input 
                                    type= "text" 
                                    className= "typeComment" 
                                    name= "comment" 
                                    placeholder= "댓글달기..." 
                                    onChange= {this.getValue}
                                    onKeyPress= {this.addCommEnter} 
                                    />

                                    <button class= "post" onClick= {this.addComment}>게시</button>
                                    
                                    <ul>
                                        <li>Hello</li>
                                        {this.state.commentList.map((comm, idx) => {
                                            return <li key= {idx} > {comm}</li>
                                        })}
                                    </ul>
                                </div>
                                </div>
                        </article>
                    </div>
                    <sidebar>
                        <div className="mainRight">
                            <div className= "mainRightContent">
                                <div className= "rightFirst">
                                <img src= {사진2} alt= "userPic" className= "userPic" />
                                <span className= "userName">youngs_factory</span>
                                <span className= "userDetail">영균</span>
                            </div>
                            <div className= "rightSecond">
                                <div className= "secondTop">
                                    <span className= "userRecommend">회원님을 위한 추천</span>
                                    <span className= "all">모두 보기</span>
                                </div>
                                <div className="secondMiddle">
                                    <div className= "middleFirst">
                                        <span id= "firstImg"><i class="fas fa-surprise"></i></span>
                                        <span className= "firstName">surprise<br/>Instagram 신규가입</span>
                                        <span className= "follow">팔로우</span>
                                    </div>
                                    <div className= "middleSecond">
                                        <span id= "secondImg"><i class="fas fa-smile-wink"></i></span>
                                        <span className= "secondName">smile_wink<br/>회원님을 팔로우합니다</span>
                                        <span className= "follow">팔로우</span>
                                    </div>
                                    <div className= "middleThird">
                                        <span id= "thirdImg"><i class="fas fa-smile-beam"></i></span>
                                        <span className= "thirdName">smile_beam<br/>회원님을 위한 추천</span>
                                        <span className= "follow">팔로우</span>
                                    </div>
                                </div>
                            </div>
                                <div className= "rightThird">
                                    소개•도움말•홍보 센터•API•채용 정보•<br/>개인정보처리방침•약관•위치•인기계정•해시태그•<br/>언어<br/><br/>2021 INSTAGRAM FROM FACEBOOK
                                </div>
                            </div>
                        </div>
                    </sidebar>
                </div>
                </main>
            </div>
        )
    }
}

export default MainYoungkyun;