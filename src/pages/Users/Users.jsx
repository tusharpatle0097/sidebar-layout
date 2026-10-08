import style from "./Users.module.css";

function Users() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Users</h1>
          <p>Manage application users.</p>
        </div>

        <button className="primary-button">Add User</button>
      </div>

      <div className="content-card">Users data will appear here.</div>
    </div>
  );
}

export default Users;
