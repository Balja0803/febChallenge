import PageButton from "./PageButton";
import { Link, useParams } from "react-router-dom";
import "../style/pagination.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Pagination() {
  const { pageId } = useParams();
  const [currentPage, setCurrentPage] = useState(pageId ? pageId : "1");
  const [lastPage, setLastPage] = useState();

  useEffect(() => {
    axios.get("http://localhost:2030/page").then((res) => {
      console.log(res.data.num);
      setLastPage(res.data.num);
    });
  }, []);

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link
          to={`/page/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PageButton btnName={"өмнөх"} btnClass={"inactive"} />
        </Link>
      )}
      {currentPage >= 4 && (
        <Link
          to={`/page/${currentPage - 3}`}
          onClick={() => setCurrentPage(currentPage - 3)}
        >
          <PageButton btnName={currentPage - 3} btnClass={"inactive"} />
        </Link>
      )}
      {currentPage >= 5 && <p>...</p>}
      {currentPage >= 3 && (
        <Link
          to={`/page/${currentPage - 2}`}
          onClick={() => setCurrentPage(currentPage - 2)}
        >
          <PageButton btnName={currentPage - 2} btnClass={"inactive"} />
        </Link>
      )}
      {currentPage >= 2 && (
        <Link
          to={`/page/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PageButton btnName={currentPage - 1} btnClass={"inactive"} />
        </Link>
      )}
      <span>
        <PageButton btnName={currentPage} btnClass={"active"} />
      </span>
      {currentPage + 1 < lastPage && (
        <Link
          to={`/page/${currentPage + 1}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <PageButton btnName={currentPage + 1} btnClass={"inactive"} />
        </Link>
      )}
      {currentPage + 3 == lastPage && (
        <Link
          to={`/page/${currentPage + 2}`}
          onClick={() => setCurrentPage(currentPage + 2)}
        >
          <PageButton btnName={currentPage + 2} btnClass={"inactive"} />
        </Link>
      )}
      {currentPage < lastPage - 3 && <p>...</p>}
      {currentPage !== lastPage && (
        <Link to={`/page/${lastPage}`} onClick={() => setCurrentPage(lastPage)}>
          <PageButton btnName={lastPage} btnClass={"inactive"} />
        </Link>
      )}
      {currentPage < lastPage && (
        <Link
          to={`/page/${currentPage + 1}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <PageButton btnName={"дараах"} btnClass={"inactive"} />
        </Link>
      )}
    </div>
  );
}
