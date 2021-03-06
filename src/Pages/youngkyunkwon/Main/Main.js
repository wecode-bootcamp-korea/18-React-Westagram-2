import React from 'react';
import './Main.css';


class Main extends React.Component {
    render() {
        return (
            <body>
            <div className= "wrap">
                <nav>
                    <div className= "fixedBar">
                        <span className= "bar">
                        <span className= "barLogo">westagram</span>
                        <span className= "barSearch">
                            <span className= "icon"><i class="fas fa-search"></i></span>
                            <input type= "text" name= "search" placeholder= "검색" className= "search"/>
                        </span>
                        <span className= "barImg">
                            <span id ="homeImg"><i class="fas fa-home"></i></span>
                            <span id ="dmImg"><i class="far fa-paper-plane"></i></span>
                            <span id ="compassImg"><i class="far fa-compass"></i></span>
                            <span id ="heartImg"><i class="far fa-heart"></i></span>
                            <img src= "/images/사진2.jpg" alt= "userPic" className= "userPic" />
                        </span>
                        </span>
                    </div>
                </nav>
                <main>
                <div className= "main">
                    <div classNames ="feeds">
                        <div className= "story">
                            <span className= "storyFirst">
                                <img src= "/images/story1.jpg" alt= "story1Pic" className= "storyPic" />
                                <span className= "firstName">artist_jihun</span>
                            </span>
                            <span className= "storySecond">
                                <img src= "/images/story2.jpg" alt= "story2Pic" className= "storyPic" />
                                <span className= "secondName">yohee</span>
                            </span>
                            <span className= "storyThird">
                                <img src= "/images/story3.jpg" alt= "story3Pic" className= "storyPic" />
                                <span className= "thirdName">laywer</span>
                            </span>
                            <span className= "storyFourth">
                                <img src= "/images/story4.jpg" alt= "story4Pic" className= "storyPic" />
                                <span className= "fourthName">dog</span>
                            </span>
                            
                        </div>
                        <article>
                            <header>
                                <div className= "articleNav">
                                    <span className="articleNavPic"><img src= "/images/사진3.jpg" alt= "articleNavPic" /></span>
                                    <span className= "articleNavPome">
                                        <span className= "articleNavName">pome_louis</span>
                                        <span className= "articleNavDetail">이쁜 내새끼</span>
                                    </span>
                                    <span className= "moreInfo"><i class="fas fa-ellipsis-h"></i></span>
                                </div>
                            </header>
                                <img src= "/images/사진1.jpg" alt= "articlePic" className= "articlePic" />
                                <div className= "articleBottom">
                                        <span id ="heartImg"><i class="far fa-heart"></i></span>
                                        <span id ="commentImg"><i class="far fa-comment"></i></span>
                                        <span id ="dmImg"><i class="far fa-paper-plane"></i></span>
                                        <span id ="bookmarkImg"><i class="far fa-bookmark"></i></span>
                                    
                                </div>
                                <div className= "like">좋아요58개</div>
                                <div className= "comment">
                                    <div className= "articleNavName">pome_louis</div>
                                    <div className= "commentExplain">루이 미용해쭁💇🏻🧖🏻💆🏻
                                        나 이뽕??😝😝<br/>#꽃단장애견미용실 #강아지미용 #강아지미용실 #예뻐
                                    </div>
                                    <div className= "commentComment"> 댓글7개 모두보기</div>
                                    <div className= "date">1일전</div>
                                    <input type= "text" name= "comment" placeholder= "댓글달기..." className= "typeComment" />
                                </div>
                        </article>
                    </div>
                    <sidebar>
                        <div className="mainRight">
                            <div className= "mainRightContent">
                                <div className= "rightFirst">
                                <img src= "/images/사진2.jpg" alt= "userPic" className= "userPic" />
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
        </body>
        )
    }
}

export default Main;