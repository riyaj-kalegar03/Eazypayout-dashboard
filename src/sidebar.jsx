export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src="./public/ass1logo.jpg" alt="" />
        </div>
        <div className="btns">
          <button className="loads">
            <span className="material-symbols-outlined">download</span> Loads
          </button>
          <button className="statement">
            <span className="material-symbols-outlined">assignment</span>{" "}
            Statements
          </button>
          <button>
            <span className="material-symbols-outlined">swap_vert</span>{" "}
            Transactions
          </button>
        </div>
      </div>
      <div className="logout">
        <button>
          <span className="material-symbols-outlined">logout</span> Logout
        </button>
      </div>
    </div>
  );
}
