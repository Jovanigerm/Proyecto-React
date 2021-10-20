import React from 'react'
import ReactDom from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"

import Router from './router/router'

const info = <Router/>
ReactDom.render(info,document.getElementById('root'))