import PageHeading from "../../../components/PageHeading";
import { Link } from "react-router";


function AuthorList() {
    return (
        <>
            <main className="dashboard-content">
                <div className="container-fluid px-3 px-lg-4 py-4">
                    <PageHeading
                        icon="person"
                        subtitle="Library"
                        title="Authors"
                        desc="Manage library authors"
                    >
                        <Link className="btn btn-primary" to="/add-author">
                            <i className="bi bi-plus-lg me-2"></i>
                            Add Author
                        </Link>
                    </PageHeading>
                </div>
            </main>
        </>
        

    );
}

export default AuthorList;