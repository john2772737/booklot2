import React from "react";
import { NavLink } from "react-router-dom";
function admin_dashboard() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin_approvalseller" >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>

      <h1> this is dashboard</h1>
      <button>go to approval</button>
    </div>
  );
}

export default admin_dashboard;
