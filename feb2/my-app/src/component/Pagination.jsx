import PageButton from "./PageButton";
import { Link } from "react-router-dom";
import "../style/pagination.css";
import { useState } from "react";

export default function Pagination() {
  const PageNumbers = 4399;
  const [currentPage, setCurrentPage] = useState(10);
  return (
    <div className="pagination">
      <Link
        to={`/page/${currentPage - 1}`}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <PageButton btnName={currentPage - 1} btnClass={"inactive"} />
      </Link>
      <span>
        <PageButton btnName={currentPage} btnClass={"active"} />
      </span>
      <Link
        to={`/page/${currentPage + 1}`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <PageButton btnName={currentPage + 1} btnClass={"inactive"} />
      </Link>
    </div>
  );
}
