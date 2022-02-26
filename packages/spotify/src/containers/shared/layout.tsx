// Importing combination
import React, { Component, useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

const Layout = () => {
  useEffect(() => {
    
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
