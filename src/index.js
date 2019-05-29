"use strict"

import React from 'react'
import { render } from 'react-dom'

import AppShell from './Pages/AppShell'

window.addEventListener('load', () => {
  render(<AppShell />, document.getElementById("root"))
})
