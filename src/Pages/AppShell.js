"use strict"

import React, { Component } from 'react'

export default class AppShell extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <header className="w3-bar w3-blue">
          <a href="#" className="w3-bar-item w3-border-right w3-border-white w3-hover-grey"> <i className="fa fa-bars" /> </a>
          <a href="#" className="w3-bar-item" style={{textDecoration: 'none', fontFamily: "'Pacifico', cursive"}}>
            Simple Chat
          </a>
          <span className="w3-right w3-hover-opacity" style={{padding: "3px 6px"}}>
            <span className="w3-bar-item w3-border w3-border-white w3-circle" style={{padding: '4px 8px'}}>
              <i className="fa fa-user" />
            </span>
          </span>
        </header>
      </div>
    )
  }
}
