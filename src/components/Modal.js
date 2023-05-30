// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Modal(props) {
//     const [book, setBook] = useState([])

//     const getBook = async() =>{
//         const { data } = await axios.put(`http://localhost:8080/api/book/updateBook/${props._id}` , currentBook)
//         setBook(data?.books)
//     }
// //check the required book they want to update
//     const currentBook = book.find(b=> b._id === props._id)
//     console.log("currentBook", currentBook)

//     useEffect(()=>{
//         getBook()
//     }, [])
//   return (
//     <>
//       <button
//         type="button"
//         class="btn btn-primary center"
//         data-bs-toggle="modal"
//         data-bs-target="#myModal"
//       >
//         Edit
//       </button>

//       <div class="modal" id="myModal">
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h4 class="modal-title">Modal Heading</h4>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//               ></button>
//             </div>

//             <div class="modal-body">
//             <form
//              onSubmit={getBook}
//              >
//                 <div className="mb-3 mt-3">
//                   <label htmlFor="title" className="form-label">
//                     Book Title
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter Book Title"
//                     defaultValue={currentBook.title}
        
//                   />
//                   <label htmlFor="authorName" className="form-label">
//                   Author's Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter Author's Name"
//                     defaultValue={currentBook.author}
                    

                
//                   />
//                   <label htmlFor="pages" className="form-label">
//                     No. of Pages
//                   </label>
//                   <input
//                     type="integer"
//                     className="form-control"
//                     placeholder="Enter No. of Pages"
//                     defaultValue={currentBook.no_of_pages}
                 
//                   />
//                   <label htmlFor="publishAt" className="form-label">
//                   Published At
//                   </label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     placeholder="Enter email"
//                     defaultValue={currentBook.published_at}
//                   />
//                 </div>
//                 </form>
//             </div>

//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-primary"
//                 data-bs-dismiss="modal"
//               >
//                 Update
//               </button>
//               <button
//                 type="button"
//                 class="btn btn-danger"
//                 data-bs-dismiss="modal"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Modal;
