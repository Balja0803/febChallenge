import "../style/btnStyle.css";
function PageButton({ btnName, btnClass }) {
  return <button className={btnClass}>{btnName}</button>;
}
export default PageButton;
