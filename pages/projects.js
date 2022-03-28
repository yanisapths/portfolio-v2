import React , {useState , useEffect} from 'react'
import Projects from '../components/Projects.js'
import Layout from '../components/ui/Layout.js'

function projects() {
 
  return (
      <Layout>
          <Projects />
      </Layout>
  )
}

export default projects;