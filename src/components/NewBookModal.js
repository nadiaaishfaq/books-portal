import axios from "axios";
import React, { useEffect, useState } from "react";

function NewBookModal() {
  const [values, setValues] = useState({
    title: "",
    author: "",
    no_of_pages: "",
    published_at: "",
  });
  
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(values)
      const response = await axios.post(
        "http://localhost:8080/api/book/newBook", values
      );
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Add New Book
      </button>

      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Add New Book</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                  <label htmlFor="title" className="form-label">
                    Book Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Book Title"
                    value={values.title}
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
                    value={values.author}
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
                    value={values.no_of_pages}
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
                    value={values.published_at}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        published_at: e.target.value,
                      })
                    }
                  />
                  <button
                    type="submit"
                    class="btn btn-primary mt-3"
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
