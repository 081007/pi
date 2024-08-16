import style from './cart.module.css';

export default function Cart() {
  return (
    <>
      <div className={style.titleD}>

        <h1 className={style.clr} >Meu Carrinho</h1>

      </div>
      <div className={style.f}>
        <div className={style.container}>



          <div className={style.produtos1}>
            <img className={style.imgC} src="./src/images/camisa.jpg" alt="" />
            
            <div className={style.dropdown}>
            <button className={style.dropbtn}>Tamanho</button>
             <div className={style.dropdownContent}>
              <a href="#">P</a>
              <a href="#">M</a>
              <a href="#">G</a>
             </div>
            </div>



            <div className={style.dropdown}>
            <button className={style.dropbtn}>cor</button>
             <div className={style.dropdownContent}>
              <a href="#">Branco</a>
              <a href="#">Preto</a>
              <a href="#">Verde</a>
             </div>
            </div>

            <button className={style.bt}>COMPRAR</button>
          </div>
          <div className={style.produtos2}>
            <img className={style.imgC} src="./src/images/moletom.jpg" alt="" />

            <div className={style.dropdown}>
            <button className={style.dropbtn}>Tamanho</button>
             <div className={style.dropdownContent}>
              <a href="#">P</a>
              <a href="#">M</a>
              <a href="#">G</a>
             </div>
            </div>



            <div className={style.dropdown}>
            <button className={style.dropbtn}>cor</button>
             <div className={style.dropdownContent}>
              <a href="#">Branco</a>
              <a href="#">Preto</a>
              <a href="#">Verde</a>
             </div>
            </div>


            <button className={style.bt}>COMPRAR</button>
          </div>
          <div className={style.produtos3}>
            <img className={style.imgC} src="./src/images/eco.jpg" alt="" />

            <div className={style.dropdown}>
            <button className={style.dropbtn}>Tamanho</button>
             <div className={style.dropdownContent}>
              <a href="#">P</a>
              <a href="#">M</a>
              <a href="#">G</a>
             </div>
            </div>



            <div className={style.dropdown}>
            <button className={style.dropbtn}>cor</button>
             <div className={style.dropdownContent}>
              <a href="#">Branco</a>
              <a href="#">Preto</a>
              <a href="#">Verde</a>
             </div>
            </div>

            <button className={style.bt}>COMPRAR</button>
          </div>

        </div>
        <div className={style.container}>

            <button className={style.button}>Finalizar compra</button>
            
        </div>
      </div>
    </>
  )
}