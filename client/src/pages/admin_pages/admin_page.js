import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin_dashboard from "./admin_dashboard";
import Admin_approvalseller from "./admin_approvalseller";
function admin_page() {
  return (
    <div>
      <h1>navbar</h1>
      <BrowserRouter>
        <Routes>
          <Route >
            <Route index element={<Admin_dashboard />} />
            <Route path="/admin_dashboard" element={<Admin_dashboard />} />
            <Route
              path="/admin_approvalseller"
              element={<Admin_approvalseller />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default admin_page;
