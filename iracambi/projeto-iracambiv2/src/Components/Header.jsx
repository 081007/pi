

import styles from './header.module.css'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <>
      <header className={styles.fundo}>
        <div className={styles.navbar}>

          <ul className={styles.menu}>
            <img className={styles.logo} src="./src/images/iracambi-quadrado.webp" alt="" />

            <div className="topnav">
              <input type="text" placeholder="Pesquisar..." />
            </div>

            <li><Link to="./"><img className={styles.icons} src="./src/images/casa.png" alt="" /></Link></li>
            <li><Link to="./Cart"><img className={styles.icons} src="./src/images/carrinho-de-compras.png" alt="" /> </Link></li>
            <li><Link to="./Conta"><img className={styles.icon3} src="./src/images/conta.png" alt="" /> </Link></li>



          </ul>


        </div>




        <img className={styles.imgM1} src="./src/images/muda1.jpg" alt="" />

        <div className={styles.slogan}>

          <h1>Iracambi</h1>
          <h2>Salvando florestas, transformando vidas</h2>

        </div>
      </header>

    
    </>
  )
}