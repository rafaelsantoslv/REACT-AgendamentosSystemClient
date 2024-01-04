import React from 'react'
import Header from '../../components/Header'
import imagemHome from '../../assets/imagemHome2.jpg'
import { MainHome } from './style'
function index() {
  return (
    <>
    <Header/>

    <MainHome>
      <section>
      <img src={imagemHome} className='blur-sm p-10' />
      <p className=''>AGENDE SEU HORÁRIO COM NOSSOS BARBEIROS JÁ!</p>
      </section>
    </MainHome>
    </>
  )
}

export default index