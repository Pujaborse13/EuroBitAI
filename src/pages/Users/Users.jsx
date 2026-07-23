import "./Users.css";

function Users() {

  const users = [
    {
      id: "USR001",
      name: "Kapil Gandhi",
      email: "kapilgandhi@gmail.com",
      role: "L3 Admin",
      status: "Active",
    },
    {
      id: "USR002",
      name: "Puja Borse",
      email: "pujaborseofficial@gmail.com",
      role: "L2 Support",
      status: "Active",
    },
    {
      id: "USR003",
      name: "Rahul Sharma",
      email: "rahul.sharma@eurobitai.com",
      role: "L1 Support",
      status: "Active",
    },
    {
      id: "USR004",
      name: "Sneha Patil",
      email: "sneha.patil@eurobitai.com",
      role: "Infrastructure Engineer",
      status: "Inactive",
    },
    {
      id: "USR005",
      name: "Amit Verma",
      email: "amit.verma@eurobitai.com",
      role: "Operations Manager",
      status: "Active",
    },
  ];

  return (
    <div className="users-page">

      <div className="users-header">
        <h1>User Management</h1>

        <button className="add-user-btn">
          + Add User
        </button>
      </div>

      <div className="users-table">

        <table>

          <thead>

            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user.id}>

                <td>{user.id}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.role}</td>

                <td>
                  <span
                    className={
                      user.status === "Active"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {user.status}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Users;