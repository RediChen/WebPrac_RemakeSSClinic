import iconTel from "src/assets/icons/iconTel.png"
import iconAdr from "src/assets/icons/iconAdr.png"
import iconTraffic from "src/assets/icons/iconTraffic.png"
import iconBus from "src/assets/icons/iconBus.png"
import iconCar from "src/assets/icons/iconCar.png"
import friendLink0 from "src/assets/images/friendLink0.png";
import friendLink1 from "src/assets/images/friendLink1.png";
import friendLink2 from "src/assets/images/friendLink2.png";
type jsxPack = JSX.Element[];
//* Part 1 : 嵌入Google地圖
const Map = () =>
    <div id="map">
        <iframe style={{ border: 0 }}
            title="心寧診所的周遭地圖" loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14462.7791466998!2d121.3196924!3d25.010485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x130c1e38f756a59!2z5b-D5pm06Ki65omA!5e0!3m2!1szh-TW!2stw!4v1622035578348!5m2!1szh-TW!2stw">
        </iframe>
    </div>
//* Part 2 : 門診時間簡表
const TableHead = () =>
    <tr>
        <th>時段</th>
        <th>一</th>
        <th>二</th>
        <th>三</th>
        <th>四</th>
        <th>五</th>
        <th>六</th>
    </tr>
const TableData = () => {
    const timeRef = [
        [1, 0, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0]
    ];
    const periodRef = ["上午", "下午", "晚上"];
    const tdPack = [] as jsxPack;
    let tdToday = [] as jsxPack;
    for (let i = 0; i < periodRef.length; i++) {
        tdToday.push(
            <td>{periodRef[i]}</td>
        );
        for (let day = 0; day < timeRef[0].length; day++) {
            if (timeRef[i][day] === 1) {
                tdToday.push(
                    <td key={6 * i + day}>
                        <span>&bull;</span>
                    </td>
                );
            } else
                tdToday.push(<td key={6 * i + day}></td>);
        }
        tdPack.push(<tr key={i}>{tdToday}</tr>);
        tdToday = [];
    }
    return <>{tdPack}</>;
}
const TimeTable = () =>
    <div id="time-footer">
        <h2 className="title-2">門診時間簡表</h2>
        <hr className="hr-3" />
        <table>
            <TableHead />
            <TableData />
        </table>
        <button className="btn" data-s2-target="time" data-s2-offset="-4450">詳細資訊</button>
    </div>
//* Part 3 : 聯絡 & 交通方式
const Traffic = () => {
    const imgAdj = {
        display: 'inline-block',
        transform: `rotate(-90deg)`,
    }
    return (
        <dl className="p-text">
            <dt>
                <img src={iconTel} alt="心晴診所的電話號碼" />
                電話
                <a href="tel:+886-3-3467895">(03) 346-7895</a>
            </dt>
            <dt>
                <img src={iconAdr} alt="心晴診所的地址" />
                地址：桃園市桃園區大有路360號1樓
            </dt>
            <dt>
                <img src={iconTraffic} alt="交通方式" style={imgAdj} />
                交通方式
            </dt>
            <dd>
                <img src={iconBus} alt="搭車前往心晴診所" style={{ width: 32 + 'px', height: 32 + 'px' }} />
                大眾交通：搭乘105、168、209、602、707、9069、免費公車環狀線紅‧藍線，在「新光三越」站下車
            </dd>
            <dd>
                <img src={iconCar} alt="開車前往心晴診所" />
                自行開車：國道一號，在南崁交流道下，往桃園春日路。後接健行路，再接大有路，開至360號。
            </dd>
        </dl>
    );
}
//* Part 4 : 友善連結
const FriendLink = () =>
    <div id="friend-link">
        <a href="http://peacefulmindclinic.com/" target="_blank" rel="noopener">
            <img src={friendLink1} alt="心寧診所" title="前往心寧診所網站" />
        </a>
        <button data-s2-target="home">
            <img src={friendLink0} alt="心晴診所" title="回到最上" />
        </button>
        <a href="http://sinyue-clinic.com/" target="blank" rel="noopener">
            <img src={friendLink2} alt="欣悅診所" title="前往欣悅診所網站" />
        </a>
    </div>
//* Part 5 : 版權聲明
const Copyright = () =>
    <div>
        <p className="p-text">心晴診所 版權所有 &copy; Copyright 2021. <wbr />All Rights Reserved.</p>
    </div>
//* 最後組裝
export default function Footer() {
    /* id name for 捲動前往功能 */
    return (
        <footer id="footer">
            <Map />
            <div>
                <TimeTable />
                <Traffic />
            </div>
            <FriendLink />
            <Copyright />
        </footer>
    );
}