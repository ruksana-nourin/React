import { Link } from "react-router";
import { useEffect, useState } from "react";
import { defaultPost } from "../../../interfaces/Post";
import type { Post } from "../../../interfaces/Post";
import PageHeading from "../../../components/PageHeading";

function PostCreate() {
  const [post, setPost] = useState<Post>(defaultPost);
  function handleSubmit() {

  }
  
  
   
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
  
  return (
    <>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          <PageHeading
            icon="person-plus"
            subtitle="Management"
            title="Add Post"
            desc="Create a new post with title and body."
          >


            <Link className="btn btn-outline-secondary btn-sm" to="/post">
              <i className="bi bi-arrow-left" aria-hidden="true"></i> Back to posts
            </Link>

          </PageHeading>

          <section className="row g-3">
            <div className="col-12">
              <form className="panel needs-validation">
                <input 
                type="hidden"
                value={post.UserId}
                />
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label">
                     Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={post.title}
                      onChange={(e) => setPost({ ...post, title: e.currentTarget.value })}

                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">
                      Body
                    </label>
                    <textarea
                      className="form-control"
                      value={post.body}
                      onChange={(e) => setPost({ ...post, body: e.currentTarget.value })}

                    />
                  </div>
                  
                </div>
                <div className="d-flex flex-wrap justify-content-end gap-2 mt-4">
                  <button className="btn btn-outline-secondary" type="reset">
                    Cancel
                  </button>
                  <button className="btn btn-primary" type="button" onClick={handleSubmit}>
                    Create New
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default PostCreate;