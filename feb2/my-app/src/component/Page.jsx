import { useParams } from "react-router-dom";
import "../style/page.css";
export default function Page() {
  const id = useParams();
  return <div className="page">Page {id.id} </div>;
}
