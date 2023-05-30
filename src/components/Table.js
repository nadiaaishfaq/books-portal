import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import NewBookModal from "./NewBookModal";
import DeleteModal from "./DeleteModal";

function Table() {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const { data } = await axios.get("http://localhost:8080/api/book/getBooks");
    setBooks(data?.books);
    console.log(books);
  };

  useEffect(() => {
    fetchBooks();
  }, [books]);
  return (
    <>
      <div className="container mt-3">
        <h2>CRUD Operations</h2>
       <NewBookModal/>
        <table className="table table-hover table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Book Title</th>
              <th>Author's Name</th>
              <th>Number of Pages</th>
              <th>Published Date</th>
              <th className="text-center" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {books?.length > 0 &&
              books.map((b, index) => {
                return (
                  <tr key={index}>
                    <td>{b.title}</td>
                    <td>{b.author}</td>
                    <td>{b.no_of_pages}</td>
                    <td>{b.published_at}</td>
                    {/* <td><Modal key={b._id}/></td> */}
                    <td><DeleteModal key={b._id}/></td>

                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
