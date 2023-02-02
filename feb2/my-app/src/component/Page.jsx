import { useParams } from "react-router-dom";
export default function Page() {
  const id = useParams();
  return <div>Page {id.id} </div>;
}
