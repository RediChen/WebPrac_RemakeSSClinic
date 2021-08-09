import React from "react";
import Logo from "./logo"
function Hbger(props: { onClick: () => void }) {
    return (
        <div id="nav-toggle" onClick={props.onClick}>
            <div id="nav-hbg"></div>
        </div>
    );
}
interface INavLinkProps {
    index: number
    text: string
    onClick: (i : number) => void,
}
function NavLink(props: INavLinkProps) {
    return (
        <button className="nav-link"
            onClick={props.onClick}>
            {props.text}
        </button>
    )
}
interface INavProps {
    props: {
        parList: {}[]
        isOpen: boolean
    }
}
class Nav extends React.Component {
    // 建構子
    constructor(props: INavProps) {
        super(props);
        this.state = {
            parList: [
                // title 顯示文字，s2-target 目標id，s2-offset 座標修正
                { title: "關於心晴", s2_target: "intro", s2_offset: "-100", },
                { title: "醫療團隊", s2_target: "team", s2_offset: "-75", },
                { title: "治療項目", s2_target: "care", s2_offset: "-100", },
                { title: "門診時間", s2_target: "time", s2_offset: "-790", },
                { title: "交通方式", s2_target: "footer", s2_offset: "-1130", },
                { title: "聯絡我們", s2_target: "footer", s2_offset: "0", },
            ],
            isOpen: true,
        }
    }
    // 函數集  auxilary methods
    handleHbgerClick() {
        //! under construction
    }
    handleNavLinkClick(i: number) {
        //! 施工中
    }
    // 函數集  render methods
    renderAs(start: number, end?: number) {
        const pack = [];
        if (!end) end = start;
        for (let i = start; i <= end; i++) {
            pack.push(
                <NavLink
                    index={i}
                    text={this.state.parList[i].title}
                    onClick={this.handleNavLinkClick(i)}
                >
                </NavLink>
            );
        }
        return (pack);
    }
    // 渲染
    render() {
        return (
            <>
                <Hbger onClick={this.handleHbgerClick} />
                <nav>
                    {this.renderAs(0, 2)}
                    <Logo size="64" />
                    {this.renderAs(3, 5)}
                </nav>
            </>
        );
    }
}
export default Nav;