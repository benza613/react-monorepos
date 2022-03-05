// Importing combination
import React, { Component, useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

import Q from "../../business/utils/api";
import mocks from "../../business/utils/mocks";

import { Card } from "react-bootstrap";

import "./layout.scss";

const Layout = () => {
  useEffect(() => {
    // var config: AxiosRequestConfig = {
    //   baseURL: "https://accounts.spotify.com",
    //   url: "/authorize",
    // };
    // Q(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);

  return (
    <div className="row layout g-4">
      {mocks.playlist.items.map((p) => (
        <div className="col-3">
          <div className="card spCard h-100">
            <img src={p.images?.[0].url} className="card-img-top" alt="" />

            <div className="card-header">{p.name}</div>
            <div className="card-body">
              {p.description} <br />
            </div>
            <div className="card-footer">
              <small className="text-muted">Total: {p.tracks.total}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Layout;
