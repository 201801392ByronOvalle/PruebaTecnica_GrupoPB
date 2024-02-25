import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Cards from './components/Cards'
import Footer from './components/Footer'

const dataHero = [
  {
    id: 0,
    img: 'https://s3.amazonaws.com/consultag.la/recursos-consultag/Home/Slider/sliderHome-1.png',
    title: 'PRODUCTOS AUTOMOTRICES ',
  },
  {
    id: 1,
    img: 'https://s3.amazonaws.com/consultag.la/recursos-consultag/Home/Slider/sliderHome-2.png',
    title: 'PRODUCTOS DE CONSUMO',
  },
  {
    id: 2,
    img: 'https://s3.amazonaws.com/consultag.la/recursos-consultag/Home/Slider/sliderHome-3.png',
    title: 'DESTACANDO DESDE 2014',
  },
  {
    id: 3,
    img: 'https://s3.amazonaws.com/consultag.la/recursos-consultag/Home/Slider/sliderHome-3.png',
    title: 'MEJORANDO DESDE 2014',
  },
  // ... otros objetos
];

function App() {

  return (
    <>
      <Navbar />
      
      {/* Falto mandar el dataSlider con el array de dataHero*/}
      <section className='hero-section'>
        <div className='slider-space'>
          <Slider dataSlider={dataHero} />
        </div>
      </section>

      <section className='cards-section'> 
        <Cards />
      </section>

      <Footer />
    </>
  )
}

export default App;
