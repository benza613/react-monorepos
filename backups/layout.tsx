// Importing combination
import React, { Component, useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

import Q from "../../business/utils/api";
import mocks from "../../business/utils/mocks";

const Layout = () => {
  useEffect(() => {
    var config: AxiosRequestConfig = {
      baseURL: "https://accounts.spotify.com",
      url: "/authorize",
    };

    Q(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="row layout">
      <div className="col">
        {mocks.playlist.items.map((P) => (
          <div className="col-12 playlist">
            {P.name} <br />
            Total: {P.tracks.total}
          </div>
        ))}
      </div>
      <div className="col">Songs</div>
    </div>
  );
};

export default Layout;
