import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Hotel
          </a>
          <button
            data-mdb-collapse-init=""
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  RecipeDetails
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/form">
                RecipeForm
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/list">
                  RecipeList
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
