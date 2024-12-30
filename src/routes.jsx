import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import App from './components/App'
import NatureNames from './components/NatureNames'
import ReligiousNames from './components/ReligiousNames'
import Nicknames from './components/Nicknames'
import SubmitName from './components/SubmitName'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout><App /></Layout>,
  },
  {
    path: '/nature-names',
    element: <Layout><NatureNames /></Layout>,
  },
  {
    path: '/religious-names',
    element: <Layout><ReligiousNames /></Layout>,
  },
  {
    path: '/nicknames',
    element: <Layout><Nicknames /></Layout>,
  },
  {
    path: '/submit-name',
    element: <Layout><SubmitName /></Layout>,
  },
])

export default routes