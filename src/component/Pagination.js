import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example d-inline">
        <ul class="pagination justify-content-end">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">
              Previous
            </a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
