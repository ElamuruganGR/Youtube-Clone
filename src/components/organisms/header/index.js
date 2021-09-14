import React from 'react';
import  './styles.css';
import { Avatar } from '@material-ui/core';
import { Apps, Menu, Mic, Notifications, Search, VideoCall, AccountCircle } from '@material-ui/icons';

export default function Header() {
    return (
      <header className="header-wrapper">
        <div className="app-header">
          <div className="header-left">
            <Menu className="hamburger" />
            <img className="app-logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" />
          </div>
          <div className="header-search">
            <div className="text-search">
              <input type="text" placeholder="Search" />
              <Search className="search-button"/>
            </div>
            <Mic className="audio-search" />
          </div>
          <div className="header-right">
            <VideoCall className="header-icon"/>
            <Apps className="header-icon" />
            <Notifications className="header-icon" />
            <Avatar className="header-icon avatar" alt="Elamurugan" src="https://yt3.ggpht.com/yti/APfAmoH3R6Qd9aZH-SJIupwthbbGeKgCfKv9v7jB7WDgCg=s88-c-k-c0x00ffffff-no-rj-mo" />
          </div>
        </div>
        <div className="seperator" />
      </header>
    )
}
