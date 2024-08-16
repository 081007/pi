import React from 'react'

export default function Product() {
  return (
    <div>
      <div className={styled.boxs}>
        <div className={style.box}>
            <img className={style.imgP} src="./src/images/camisa.jpg" alt="" />
            <h3 className={style.titleP}>Product Title</h3>
            
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
            <button className={style.bt}> Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  )
}


