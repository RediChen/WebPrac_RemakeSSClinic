import React from "react";
interface IHeaderProps {
    text : string
}
const H1: React.FC<IHeaderProps> = ({text}) =>
    <header>
        <h1 className="title-1">{text}</h1>
        <hr className="hr-1" />
    </header>
const H2: React.FC<IHeaderProps> = ({ text }) =>
    <>
        <h3 className="title-2">{text}</h3>
        <hr className="hr-3" />
    </>
export {H1, H2};