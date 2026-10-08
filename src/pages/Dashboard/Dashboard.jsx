import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="page">

      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's your application overview.</p>
        </div>
      </div>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <span>Total Users</span>
          <strong>1,250</strong>
        </div>

        <div className="dashboard-card">
          <span>Total Products</span>
          <strong>320</strong>
        </div>

        <div className="dashboard-card">
          <span>Active Users</span>
          <strong>980</strong>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;