import React from 'react';
import './styles.css'
import bigeclipse from './imgs/big-eclipse.svg'
import Logo from './imgs/logo.svg'
import Cart from './imgs/cart.svg'
import mideclipse from './imgs/mid-eclipse.svg'
import smalleclipse from './imgs/small-eclipse.svg'
import leftarrow from './imgs/arrow-left.svg'
import rightarrow from './imgs/arrow-right.svg'
import dot from './imgs/dot.svg'
import dotfull from './imgs/dot-full.svg'

import Matebook from './imgs/matebook.png'

function App() {
  return (
    <div>
      <header>
        <div className="logo-container">
          <img src={Logo} alt="Logo"/>
          <h4 className="logo">Three Dots</h4>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a class="nav-link" href="#">Specs</a></li>
            <li><a class="nav-link" href="#">Products</a></li>
            <li><a class="nav-link" href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="cart">
          <img src={Cart} alt="Cart"/>
        </div>
      </header>

      <main>
        <section className="presentation">
          <div className="introduction">
            <div className="intro-text">
              <h1>Laptop do Futuro</h1>
              <p>O novo Bezeless de 14 polegadas oferece definição 4K com touch screen.</p>
            </div>
            <div className="cta">
              <button className="cta-select">
                14 Polegadas
              </button>
              <button className="cta-add">
                Por no Carrinho
              </button>
            </div>
          </div>
          <div className="cover">
            <img src={Matebook} alt="matebook"/>
          </div>
        </section>

        <div className="laptop-select">
          <img src={leftarrow} alt=""/>
          <img src={dot} alt=""/>
          <img src={dotfull} alt=""/>
          <img src={dotfull} alt=""/>
          <img src={rightarrow} alt=""/>
        </div>

        <img src={bigeclipse} alt="beclip" className="big-circle"/>
        <img src={mideclipse} alt="" className="mid-circle" />
        <img src={smalleclipse} alt="" className="small-circle" />
      </main>
    </div>
  );
}

export default App;
