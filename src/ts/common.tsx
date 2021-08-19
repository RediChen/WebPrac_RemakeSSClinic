import React from "react";
import { useState } from "react";
import Logo from "./logo"

type BtnProps = { onClick: () => void }
//* 回到最上按鈕
const ToTheTop: React.FC<BtnProps> = ({onClick}) =>
    <button id="tothetop" onClick={onClick}></button>
//* 漢堡包按鈕
const Hbger: React.FC<BtnProps> = ({ onClick }) =>
    <button id="nav-toggle" onClick={onClick}>
        <div id="nav-hbg"></div>
    </button>
//* 導覽列＆元件組裝
interface INavLinkProps {
    index: number
    text: string
    onClick: (i: number) => void,
}
function NavLink(props: INavLinkProps) {
    return (
        <button className="nav-link"
            onClick={() => props.onClick(props.index)}>
            {props.text}
        </button>
    )
}
const Nav: React.FC = () => {
    const parList = [
        // title 顯示文字，s2-target 目標id，s2-offset 座標修正
        { title: "關於心晴", s2_target: "intro", s2_offset: "-100", },
        { title: "醫療團隊", s2_target: "team", s2_offset: "-75", },
        { title: "治療項目", s2_target: "care", s2_offset: "-100", },
        { title: "門診時間", s2_target: "time", s2_offset: "-790", },
        { title: "交通方式", s2_target: "footer", s2_offset: "-1130", },
        { title: "聯絡我們", s2_target: "footer", s2_offset: "0", },
    ];
    // 建構子
    const [isOpen, setIsOpen] = useState<boolean>(true);
    // 函數集  auxilary methods
    const handleHbgerClick = () => setIsOpen(!isOpen)
    function handleNavLinkClick(i: number) {
        //! 施工中 with scroll to extension
    }
    function renderAs(start: number, end?: number) {
        const pack = [];
        if (!end) end = start;
        for (let i = start; i <= end; i++) {
            pack.push(
                <NavLink
                    index={i}
                    text={parList[i].title}
                    onClick={handleNavLinkClick}
                />
            );
        }
        return (pack);
    }
    // 渲染
    return (
        <>
            <ToTheTop onClick={handleHbgerClick} />
            <Hbger onClick={handleHbgerClick} />
            <nav>
                {renderAs(0, 2)}
                <Logo size="64" />
                {renderAs(3, 5)}
            </nav>
        </>
    );
}
export default Nav;