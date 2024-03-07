import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Product from './components/Product'
import Service from './components/Service'
import About from './components/About'
import Empty from './components/Empty'
import Footer from './components/Footer'
import News from './components/News'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Product />
      <Service />
      <About />
      <News />
      <Empty />
      <Footer />
    </div>
  )
}

export default App