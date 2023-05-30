import axios from "axios";
import React, { useEffect, useState } from "react";
import { createBook, updateBook } from "../api/index";

function NewBookModal({modal, books, setBooks, setModal,  currentId, setCurrentId}) {
  const [values, setValues] = useState({
    title: "",
    author: "",
    no_of_pages: null,
    published_at: null,
  });

  const singleBook = books.find((book) => book._id === currentId)  
 
  const handleSubmit = async (e) => {
    console.log('submit data')
        e.preventDefault();
    try {
      if (currentId !== 0) {
        console.log(singleBook._id)
        const response = updateBook(values, currentId)
  setBooks([ ...books,
           books.map((book) =>
            book._id === response?.data?._id ? response.data : book
          )])
      } else {
        const response = await createBook(values)
        setValues([...values, response.data])
      }
      setModal(false)
      setCurrentId(0)
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setModal(true)}
      >
        Add New Book
      </button>

      <div className={modal === true ? "d-block" : "d-none"}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{currentId !== 0 ? "Update Book Details" : "Add new Book"}</h4>
              <button
                type="button"
                className="btn-close"
                onClick={() => setModal(false)}
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                  <label htmlFor="title" className="form-label">
                    Book Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Book Title"
                    defaultValue={currentId ? singleBook.title : ""}
                    // value={values.title}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        title: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="authorName" className="form-label">
                    Author's Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Author's Name"
                    defaultValue={currentId ? singleBook.author : ""}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        author: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="pages" className="form-label">
                    No. of Pages
                  </label>
                  <input
                    type="integer"
                    className="form-control"
                    placeholder="Enter No. of Pages"
                    defaultValue={currentId ? singleBook.no_of_pages : ""}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        no_of_pages: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="publishAt" className="form-label">
                    Published At
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Enter email"
                    defaultValue={currentId ? singleBook.published_at : ""}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        published_at: e.target.value,
                      })
                    }
                  />
                  <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewBookModal;
