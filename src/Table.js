import React, { useState, useEffect } from "react";
import "./styles.css";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.min.css";

function Table() {
  $.DataTable = require("datatables.net");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://your-api-endpoint.com")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    $(document).ready(() => {
      $("#example").DataTable({
        data: data,
        columns: [{ title: "Game" }, { title: "Stop" }]
      });
    });
  }, [data]);

  return (
    <div className="container">
      <h2>GAFF</h2>
      <table className="table table-dark" id="example" width="100%"></table>
    </div>
  );
}

export default Table;
