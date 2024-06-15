import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
function Contact() {
  return (
    <div>
        <Header />
        <div className='pt-32'>
          <Form />
        </div>
        <Footer />
    </div>
  )
}

export default Contact