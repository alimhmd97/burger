import styels from "./backDrop.module.css";
const backDrop = ({ show, clicked }) => {
  return (
    <>
      {show ? <div className={styels.BackDrop} onClick={clicked}></div> : null}{" "}
    </>
  );
};

export default backDrop;
