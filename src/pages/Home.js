import React, { useState } from "react";
import NewBookModal from "../components/NewBookModal";
import Table from "../components/Table";

function Home() {
  const [modal, setModal] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [books, setBooks] = useState([]);
  return (
    <>
      <div className="container mt-3">
        <h2>CRUD Operations</h2>
        <NewBookModal
          modal={modal}
          setModal={setModal}
          currentId={currentId}
          setCurrentId={setCurrentId}
          books={books}
          setBooks={setBooks}
        />
        <Table
          modal={modal}
          setModal={setModal}
          currentId={currentId}
          setCurrentId={setCurrentId}
          books={books}
          setBooks={setBooks}
        />
      </div>
    </>
  );
}

export default Home;
