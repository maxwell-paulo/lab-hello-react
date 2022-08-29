import style from "./styles.module.css";
import declarative from "../../images/icon1.png";
import componets from "../../images/icon2.png";
import singleWay from "../../images/icon3.png";
import jsx from "../../images/icon4.png";

function Infos() {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <img src={declarative} alt="declarative img" />
        <h2 className={style.infosH2}>Declarative</h2>
        <p className={style.infosP}>React makes it</p>
        <p className={style.infosP}>painless to create</p>
        <p className={style.infosP}>interactive UIs.</p>
      </div>

      <div className={style.info}>
        <img src={componets} alt="components img" />
        <h2 className={style.infosH2}>Components</h2>
        <p className={style.infosP}>Build encapsulated</p>
        <p className={style.infosP}>components that</p>
        <p className={style.infosP}>manage their state.</p>
      </div>

      <div className={style.info}>
        <img src={singleWay} alt="single-way img" />
        <h2 className={style.infosH2}>Single-Way</h2>
        <p className={style.infosP}>a set of immutable</p>
        <p className={style.infosP}>values are passed to</p>
        <p className={style.infosP}>the component's.</p>
      </div>

      <div className={style.info}>
        <img src={jsx} alt="jsx img" />
        <h2 className={style.infosH2}>JSX</h2>
        <p className={style.infosP}>Statically-typed,</p>
        <p className={style.infosP}>designed to run on</p>
        <p className={style.infosP}>modern browsers.</p>
      </div>
    </div>
  );
}
export default Infos;
