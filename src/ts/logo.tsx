import Logo32px from "src/assets/favicon/woFrame32px.png";
import Logo64px from "src/assets/favicon/woFrame64px.png";
import Logo128px from "src/assets/favicon/woFrame128px.png";
export default function Logo(props: { size: string }) {
    //size=32, 64, 128 (in px)
    let address: string;
    switch (props.size) {
        case "32":
            address = Logo32px;
            break;
        case "64":
            address = Logo64px;
            break;
        case "128":
            address = Logo128px;
            break;
        default:
            address = "";
            console.error("輸入的 " + props.size + " px 是未供應的 Logo 尺寸。");
    }
    //src={`Logo${props.size}px`}
    return (
        <img className={`logo logo-${props.size}`} src={address}
            alt="心晴診所 Sunshine Clinic logo" />
    );
}