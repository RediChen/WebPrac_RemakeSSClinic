import React from "react";
import { H1, H2 } from "./Components/headers"
// Part I : 標題 using H1
//* Part II : 時間表
const colored = [
    { backgroundColor: "#e6e6e6" },
    { backgroundColor: "#fafad1" },
    { backgroundColor: "#d1eefa" },
    { backgroundColor: "#fccfd6" }
] as React.CSSProperties[];
/* about colored :看診組合的顏色代碼
0 -> closed
1 -> children
2 -> adult
3 -> natural */
const TableItem = (colorCode: number[], isShort: boolean) => {
    const numGrid = colorCode.length;
    const pack = [] as JSX.Element[];
    for (let i = 0; i < numGrid; i++) {
        pack.push(
            <div style={colored[colorCode[i]]}></div>
        );
    }
    return (
        <div>
            {pack}
            {isShort ? <div style={colored[0]}></div> : <></>}
        </div>
    );
}
// 當日的看診組合  -->長遠目標：後台更新班表的API
const timeSheet: number[][][] = [
    [[1, 2], [0], [1, 2], [2], [0], [3, 2]],
    [[1, 2], [2], [1, 2], [3, 2], [3, 2], [0]],
    [[1, 2], [1, 2], [1, 2], [3, 2], [1, 2, 3], [0]]
];
// 當日是否提早休息-->長遠目標：後台更新班表的API
const shortSheet: boolean[][] = [
    [false, false, false, false, false, false],
    [false, true, false, false, false, false],
    [false, false, false, false, true, false],
];
const TimeTable = () => {
    const row = [[], [], [], []] as JSX.Element[][];
    row[0].push(
        <>
            <div></div>
            <div>一</div>
            <div>二</div>
            <div>三</div>
            <div>四</div>
            <div>五</div>
            <div>六</div>
        </>
    );
    for (let i = 1; i <= 3; i++) {
        for (let j = 0; j < timeSheet[i].length; j++) {
            row[i].push(
                TableItem(timeSheet[i][j], shortSheet[i][j])
            )
        }
    }
    return (
        <div id="time-table">
            {row[0]}
            <div>09:00<br />上午<br />12:00</div>
            {row[1]}
            <div>14:30<br />下午<br />17:30</div>
            {row[2]}
            <div>18:00<br />晚上<br />21:00</div>
            {row[3]}
        </div>
    );
}
//* Part III : 時間表圖例
const TableEg = () =>
    <div id="table-eg">
        <div className="table-eg-btns" data-tt-label="tt-children">
            <h4>兒童</h4>
        </div>
        <div className="table-eg-btns" data-tt-label="tt-adult">
            <h4>成人</h4>
        </div>
        <div className="table-eg-btns" data-tt-label="tt-nature">
            <h4>自然醫學</h4>
        </div>
        <div className="table-eg-btns">
            <h4>休診</h4>
        </div>
    </div>
//* Part IV : 掛號須知
const RegisterNote = () =>
    <div id="register-note">
        <H2 text="門診小叮嚀" />
        <div className="note-btn-box">
            {/* <a className="note-btns" onClick="showPage(0)">初次看診</a>
            <a className="note-btns" onClick="showPage(1)">今日看診</a>
            <a className="note-btns" onClick="showPage(2)">之後看診</a> */}
        </div>
        <div>
            <div className="note-pages">
                <h4>初次看診</h4>
                <ul aria-label="可預約方式：">
                    <li>現場掛號</li>
                    <li>電話預約</li>
                </ul>
                <ul aria-label="懇請留意：">
                    <li>現場掛號於休診前60分鐘截止</li>
                    <li>通常初診看診的時間會較長，請記得預留時間並請耐心體諒。</li>
                </ul>
                <a href="tel:+886-3-3467895" className="btn">來電預約去</a>
            </div>
            <div className="note-pages">
                <h4>今天看診</h4>
                <ul aria-label="可預約方式：">
                    {/* <!-- 小標題使用偽元素顯示 --> */}
                    <li>現場掛號</li>
                    <li><em>不接受</em> 電話預約</li>
                </ul>
                <ul aria-label="懇請留意：">
                    <li>現場掛號於休診前30分鐘截止，而初診於休診前60分鐘截止</li>
                    <li>通常初診看診的時間會較長，請記得預留時間並請耐心體諒。</li>
                </ul>
            </div>
            <div className="note-pages">
                <h4>日後看診</h4>
                <ul aria-label="可預約方式：">
                    <li>現場掛號</li>
                    <li>電話預約</li>
                </ul>
                <a href="tel:+886-3-3467895" className="btn">來電預約去</a>
            </div>
        </div>
    </div>
//* Part V : 門診異動
const TimeAdj = () =>
    <div>
        <h3 className="title-2">門診異動須知</h3>
        <hr className="hr-3" />
        <dl>
            <dt>110年清明連續假期門診公告</dt>
            <dd>04/03(六) 早診照常看診，</dd>
            <dd>04/04(日) 休診，</dd>
            <dd>04/05(一) 早診由林晴玉院長看診，午診及晚診休診。</dd>
        </dl>
        <dl>
            <dt>04/01(四)門診異動</dt>
            <dd>04/01(四) 林晴玉院長 晚診 由陳大偉醫師代診，</dd>
            <dd>看診時間一樣為18:00-21:00。</dd>
        </dl>
        {/* <a href="./history/" className="btn">MORE</a> */}
    </div>
//* 元件組裝
const TimePage = () => {
    return (
        <section id="time-page">
            <H1 text="門診時間表" />
            <TimeTable />
            <TableEg />
            <RegisterNote />
            <TimeAdj />
        </section>
    );
}
export default TimePage;