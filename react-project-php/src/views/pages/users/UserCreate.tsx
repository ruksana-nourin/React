import { Link } from "react-router";
import { useEffect, useState } from "react";
import { defaultUser } from "../../../interfaces/User";
import type { User } from "../../../interfaces/User";
import PageHeading from "../../../components/PageHeading";

function Usercreate() {
  const [user, setUser] = useState<User>(defaultUser);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    role_id: "",
    password: "",
  });
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
  function handleSubmit() {
    let newErrors: any={};
    if (user.name == "")
      newErrors.name = "Name is required!";
    else if (user.name.length < 3 || user.name.length > 50)
      newErrors.name = "Name must be between 3 and 50 characters!";
    else{
      newErrors.name = "";
    }

    if (user.email == "")
      newErrors.email = "Email is required!";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email))
      newErrors.email = "Invalid email address!";
    else{
      newErrors.email = "";
    }

    if (user.role_id == 0)
      newErrors.role_id = "Role is required!";
    else{
      newErrors.role_id = "";
    }
    
    setErrors(newErrors);
  }

  return (
    <>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          <PageHeading
            icon="person-plus"
            subtitle="Management"
            title="Add User"
            desc="Create a new user account with role and team assignments."
          >


            <Link className="btn btn-outline-secondary btn-sm" to="/user">
              <i className="bi bi-arrow-left" aria-hidden="true"></i> Back to Users
            </Link>

          </PageHeading>

          <section className="row g-3">
            <div className="col-12">
              <form className="panel needs-validation">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="firstName">
                      Name
                    </label>
                    <input
                      className="form-control"
                      id="firstName"
                      type="text"
                      value={user.name}
                      onChange={(e) => setUser({ ...user, name: e.currentTarget.value })}

                    />
                    <small className="text-danger">{errors.name}</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.currentTarget.value })}

                    />
                    <small className="text-danger">{errors.email}</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="role">
                      Role
                    </label>
                    <select className="form-select" id="role"
                      value={user.role_id}
                      onChange={(e) => setUser({ ...user, role_id: Number(e.currentTarget.value) })}>
                      <option value={0} disabled>--Choose role--</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Manager</option>
                      <option value={3}>Editor</option>
                      <option value={4}>Viewer</option>
                    </select>
                    <div className="invalid-feedback">Choose a role.</div>
                  <small className="text-danger">{errors.role_id}</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      value={user.password}
                      onChange={(e) => setUser({ ...user, password: e.currentTarget.value })}
                    />
                    <small className="text-danger">{errors.password}</small>
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

export default Usercreate;