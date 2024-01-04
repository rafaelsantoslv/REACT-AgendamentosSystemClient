import React from 'react'
import Header from '../../components/Header'
import imagemHome from '../../assets/imagemHome.jpg'

function index() {
  return (
    <>
    <Header/>
    <main className='w-screen h-full bg-sky-950'>
      <section className='flex'>
      <img src={imagemHome} className='blur-sm p-10' />
      <p className=''>AGENDE SEU HORÁRIO COM NOSSOS BARBEIROS JÁ!</p>
      </section>
    </main>
    </>
  )
}

export default index