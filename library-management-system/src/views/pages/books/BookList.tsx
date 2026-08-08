import type { Book } from "../../../interfaces/Book";
import PageHeading from "../../../components/PageHeading";
import { Link } from "react-router";
import { useState } from "react";
function BookList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);


    const books: Book[] = [
        {
            id: 1,
            title: "Clean Code",
            isbn: "9780132350884",
            author: "Robert C. Martin",
            category: "Programming",
            publisher: "Prentice Hall",
            copies: 10,
            availableCopies: 7,
            status: "Available",
            cover: "https://placehold.co/60x80"
        },
        {
            id: 2,
            title: "Atomic Habits",
            isbn: "9780735211292",
            author: "James Clear",
            category: "Self Development",
            publisher: "Avery",
            copies: 5,
            availableCopies: 0,
            status: "Issued",
            cover: "https://placehold.co/60x80"
        }
    ];
    const filteredBooks = books.filter((book) => {

        const search = searchTerm.toLowerCase();

        const matchesSearch =
            book.title.toLowerCase().includes(search) ||
            book.isbn.toLowerCase().includes(search) ||
            book.author.toLowerCase().includes(search);

        const matchesCategory =
            categoryFilter === "All" ||
            book.category === categoryFilter;

        const matchesStatus =
            statusFilter === "All" ||
            book.status === statusFilter;

        return matchesSearch && matchesCategory && matchesStatus;
    });
    const booksPerPage = 5;

    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

    const startIndex = (currentPage - 1) * booksPerPage;

    const currentBooks = filteredBooks.slice(
        startIndex,
        startIndex + booksPerPage
    );
    return (
        <>

            <main className="dashboard-content">
                <div className="container-fluid">

                    {/* Page Header */}
                    <PageHeading
                        icon="book"
                        subtitle="Management"
                        title="Books"
                        desc="Manage all books in the library."
                    >


                        <Link className="btn btnsm btn-primary" to="/add-book">
                            <i className="bi bi-arrow-right" aria-hidden="true"></i> Add Book
                        </Link>

                    </PageHeading>

                    <div className="card shadow-sm border-0">

                        <div className="card-body">

                            <div className="row g-3">

                                {/* Search */}
                                <div className="col-lg-6">

                                    <label className="form-label">
                                        Search Books
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by title, ISBN or author..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />

                                </div>

                                {/* Category */}
                                <div className="col-lg-3">

                                    <select className="form-select"
                                        value={categoryFilter}
                                        onChange={(e) => setCategoryFilter(e.target.value)}
                                    >
                                        <option value="All">All Categories</option>
                                        <option value="Programming">Programming</option>
                                        <option value="Self Development">Self Development</option>
                                    </select>



                                </div>

                                {/* Status */}
                                <div className="col-lg-3">

                                    <select className="form-select"
                                        value={statusFilter}
                                        onChange={(e) => setStatusFilter(e.target.value)}
                                    >
                                        <option value="All">All Status</option>
                                        <option value="Available">Available</option>
                                        <option value="Issued">Issued</option>
                                        <option value="Reserved">Reserved</option>
                                    </select>



                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="card shadow-sm border-0 mt-4">

                        <div className="card-body">

                            <div className="table-responsive">

                                <table className="table align-middle">

                                    <thead>

                                        <tr>

                                            <th>Cover</th>

                                            <th>Book</th>

                                            <th>Category</th>

                                            <th>Available</th>

                                            <th>Status</th>

                                            <th className="text-end">
                                                Action
                                            </th>


                                        </tr>

                                    </thead>

                                    <tbody>
                                        {currentBooks.length > 0 ? (
                                            currentBooks.map((book) => (
                                                <tr key={book.id}>

                                                    {/* Cover */}
                                                    <td>
                                                        <img
                                                            src={book.cover}
                                                            alt={book.title}
                                                            width={50}
                                                            height={70}
                                                            className="rounded border"
                                                        />
                                                    </td>

                                                    {/* Book */}
                                                    <td>
                                                        <div className="fw-semibold">
                                                            {book.title}
                                                        </div>

                                                        <small className="text-muted d-block">
                                                            ISBN: {book.isbn}
                                                        </small>

                                                        <small className="text-muted">
                                                            {book.author}
                                                        </small>
                                                    </td>

                                                    {/* Category */}
                                                    <td>{book.category}</td>

                                                    {/* Copies */}
                                                    <td>
                                                        <span className="fw-semibold">
                                                            {book.availableCopies}
                                                        </span>
                                                        <span className="text-muted">
                                                            {" / "}
                                                            {book.copies}
                                                        </span>
                                                    </td>

                                                    {/* Status */}
                                                    <td>
                                                        <span
                                                            className={`badge ${book.status === "Available"
                                                                ? "bg-success"
                                                                : book.status === "Issued"
                                                                    ? "bg-warning text-dark"
                                                                    : "bg-info"
                                                                }`}
                                                        >
                                                            {book.status}
                                                        </span>
                                                    </td>

                                                    {/* Action */}
                                                    <td className="text-end">

                                                        <button
                                                            className="btn btn-sm btn-outline-primary me-2"
                                                            title="View"
                                                        >
                                                            <i className="bi bi-eye"></i>
                                                        </button>

                                                        <button
                                                            className="btn btn-sm btn-outline-success me-2"
                                                            title="Edit"
                                                        >
                                                            <i className="bi bi-pencil"></i>
                                                        </button>

                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            title="Delete"
                                                        >
                                                            <i className="bi bi-trash"></i>
                                                        </button>

                                                    </td>

                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={6} className="text-center py-5">
                                                    No books found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                </div>
            </main>
        </>
    );
}

export default BookList;