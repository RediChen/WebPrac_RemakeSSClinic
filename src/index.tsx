// 套件
import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";

/* Nav, Hbger & tothetop */
import Nav from "./ts/common.js";
/* 首頁頁面 */
import HomePage from "./ts/homepage.js";
/* 簡介頁面 */
import IntroPage from "./ts/intropage.js";
/* 團隊頁面 */
import TeamPage from "./ts/teampage.js";
/* Footer */
import Footer from "./ts/footer.js";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// css & js
import './css/style.css';
//// 待處理 React 搭配的 sass 套件設定
// function RwdPar() {
//     //{PC, Tablet, Mob} -> {3, 2, 1}
//     const isPC = useMediaQuery('(min-width:1025px)'),
//     isMob = useMediaQuery('(max-width:676px)') ;
//     if (isPC) return 3 ;
//     if (isMob) return 1 ;
//     else return 2 ;
// }

//* 最終組裝 */
const BigPicture : FunctionComponent = () => {
    return (
        <>
            <Nav />
            <HomePage />
            <IntroPage />
            <TeamPage />
            <Footer />
        </>
    );
}
//* 最終渲染區 */
ReactDOM.render(
    <BigPicture />,
    document.getElementById("root")
);