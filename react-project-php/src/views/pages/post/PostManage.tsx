import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Post } from "../../../interfaces/Post";
import PageHeading from "../../../components/PageHeading";
import axios from "axios";

function PostManage() {
    const [posts, setPosts] = useState<Post[]>([]);
    function getAllData() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(function (res) {
                // console.log(res.data);
                setPosts(res.data);
            })
            .catch(function (err) {
                console.error(err);
            });
    }
    useEffect(() => {
        getAllData();
    }, []);
    return (
        <>
            <main className="dashboard-content">
                <div className="container-fluid px-3 px-lg-4 py-4">
                    <PageHeading
                        icon="people"
                        subtitle="Management"
                        title="Posts"
                        desc="Review posts, roles, post status, and team ownership."
                    >
                        <Link to="/post-create" className="btn btn-primary btn-sm">
                            <i className="bi bi-person-plus" aria-hidden="true"></i> Add post
                        </Link>
                    </PageHeading>

                    <section className="panel mt-3">
                        <div className="panel-header">
                            <div>
                                <h2 className="h5 mb-1 section-title"><i className="bi bi-table" aria-hidden="true"></i><span>Post List</span></h2>
                                <p className="text-muted mb-0">Search, review, and manage posts.</p>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <input className="form-control form-control-sm table-search" type="search" placeholder="Search posts" data-table-search="postsTable" aria-label="Search posts" />
                                <Link className="btn btn-primary btn-sm" to="/post-create"><i className="bi bi-person-plus" aria-hidden="true"></i> Add Post</Link >
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table align-middle mb-0" id="postsTable" data-searchable-table="">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">User</th>
                                        <th scope="col">Title</th>
                                        <th scope="col" className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map((item)=>(

                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img className="avatar-img avatar-sm" src="https://i.pravatar.cc/50?img=20" alt="Sarah Ahmed" />
                                                <div>
                                                    {item.userId}
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.title}</td>

                                        <td className="text-end ">
                                            <div className="d-flex g-1 justify-content-center align-items-center">
                                                <Link to={`/post-detail/${item.id}`} className="btn btn-success btn-sm mx-1" type="button"><i className="bi bi-eye" aria-hidden="true"></i></Link>
                                                <Link to={`/post-edit/${item.id}`} className="btn btn-primary btn-sm mx-1" type="button"><i className="bi bi-pencil" aria-hidden="true"></i></Link>
                                                <button className="btn btn-danger btn-sm mx-1" type="button"><i className="bi bi-trash" aria-hidden="true"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mt-3">
                            <p className="text-muted small mb-0">Showing 1 to 5 of 124 users</p>
                            <nav aria-label="Users pagination"><ul className="pagination pagination-sm mb-0"><li className="page-item disabled"><Link className="page-link" to="#">Previous</Link ></li><li className="page-item active"><Link className="page-link" to="#">1</Link ></li><li className="page-item"><Link className="page-link" to="#">2</Link ></li><li className="page-item"><Link className="page-link" to="#">Next</Link ></li></ul></nav>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default PostManage;