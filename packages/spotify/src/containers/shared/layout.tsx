// Importing combination
import React, { Component, useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

import Q from "../../business/utils/api";

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
      <div className="col">Folders</div>
      <div className="col">Playlists</div>
      <div className="col">Songs</div>
    </div>
  );
};

export default Layout;
