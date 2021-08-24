import { dataTeam } from "./dataTeam"
import { useState } from "react";
import { H1, H3 } from "./Components/headers";

// 資訊面板
const CardTitle = (nth: number) => {
    const memberName = dataTeam[nth]["name"];
    const memberImg = dataTeam[nth]["imgAddress"];
    return (
        <>
            <img src={memberImg} alt={memberName} title={memberName} />
            <div><h2>{memberName}</h2></div>
        </>
    );
}
function CardContent(nth: number) {
    // Part 1/2 包裝「學歷」、「經歷」、「主治」、「專長」四項文本
    const titleList = ["學歷", "經歷", "主治", "專長"];
    const member4in1 = [] as JSX.Element[];
    for (let title of titleList) {
        let liPack = [] as JSX.Element[];
        // step 1 : 有內容才渲染
        if (!dataTeam[nth][title]) continue;
        // step 2 : 將所有條目條列成 li
        for (let entry of dataTeam[nth][title] as string[]) {
            liPack.push( <li>{entry}</li> );
        }
        // step 3 : 將內容拼進上下文
        member4in1.push(
            <div className="team-sub-card">
                <H3 text={title} />
                <ul className="p-text">{liPack}</ul>
            </div>
        );
        // step 4 : 重複步驟直到輸出完畢
        liPack = [];
    }
    // Part 2/2 包裝「醫師的叮嚀」的文本
    const memberRemind = [], keyWordRemind = "醫師的叮嚀";
    if (dataTeam[nth][keyWordRemind]) {
        memberRemind.push(
            <div className="team-sub-card">
                <H3 text={keyWordRemind} />
                <p className="p-text">{dataTeam[nth][keyWordRemind]}</p>
            </div>
        );
    }
    return (
        <div className="team-about">
            {member4in1}
            {memberRemind}
        </div>
    );
}
// 主元件
function TeamPage() {
    let stateInit: boolean[] = new Array(dataTeam.length);
    stateInit.fill(false);
    const [btnStates, SetBtnStates] = useState(stateInit);
    const [memberIndex, setMemberIndex] = useState(0);
    function handleClick(nth: number) {
        SetBtnStates(stateInit);
        SetBtnStates(prevStates => {
            const state = prevStates;
            state[nth] = !state[nth];
            return state;
        });
        setMemberIndex(nth);
    }
    // 按鈕面板
    // 此函數獨立出去會有技術上的障礙
    function renderTeamBtns() {
        const pack = [];
        for (let nth = 0; nth < dataTeam.length; nth++) {
            const name = [];
            name.push(
                dataTeam[nth].name.slice(0, 3),
                <br />,
                dataTeam[nth].name.slice(3)
            );
            const className = btnStates[nth] ? "team-btn team-btn-active" : "team-btn";
            pack.push(
                <div onClick={() => handleClick(nth)} className={className}>
                    <h2>{name}</h2>
                </div>
            );
        }
        return (pack);
    }
    return (
        <section id="team-page">
            <H1 text="醫療團隊" />
            <div id="team-btn-box">
                {renderTeamBtns()}
            </div>
            <div id="team-card-wrap">
                <article className="team-card">
                    {CardTitle(memberIndex)}
                    {CardContent(memberIndex)}
                </article>
            </div>
        </section>
    );
}

export default TeamPage;