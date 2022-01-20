import styels from "./backDrop.module.css";
const backDrop = ({ show, cancelPurchase }) => {
  return (
    <>
      {show ? (
        <div className={styels.BackDrop} onClick={cancelPurchase}></div>
      ) : null}{" "}
    </>
  );
};

export default backDrop;
