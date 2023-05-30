import React, { useEffect, useState } from "react";
import axios from "axios";
import { allBooks, deleteBook } from "../api/index";


function Table({setModal, setCurrentId, books, setBooks}) {
  const fetchBooks = async () => {
    const { data } = await allBooks();
    setBooks(data?.books);
    // console.log(books);
  };

  useEffect(() => {
    fetchBooks();
  }, [books]);

  const onDelete = async(id) => {
  try {
    await deleteBook(id)
  } catch (error) {
    console.log(error)
  }
  }

  const onEdit = (id) =>{
    setCurrentId(id)
    setModal(true)
  }

  return (
    <>
      <div className="container mt-3">
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
                    <td>
                    
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={()=>onEdit(b._id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => onDelete(b._id)}
                      >
                        Delete
                      </button>
                    </td>
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
