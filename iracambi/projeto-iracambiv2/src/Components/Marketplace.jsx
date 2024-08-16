import style from "./marketplace.module.css"


export default function Marketplace() {
    return (
        <>
        <div  className={style.Cards1}>
           <div className={style.container}>
                <div className={style.card} >
                    <img src="./src/images/camisa.jpg" className={style.cardimgtop} alt="..." />
                    <div className={style.cardbody}>
                        <h5 className={style.cardtitle}>Camisa Iracambi</h5>
                        <p className={style.cardtext}>R$59,99</p>
                        <div className={style.btn}>
                        <a href="#" className={style.button}>Adicionar ao Carrinho</a>
                        <a src="./Product.jsx" className={style.button}>Ver produto</a>
                        </div>
                    </div>
                </div>


            </div>

            <div className={style.container}>
                <div className={style.card} >
                    <img src="./src/images/moletom.jpg" className={style.cardimgtop} alt="..." />
                    <div className={style.cardbody}>
                        <h5 className={style.cardtitle}>Moletom Iracambi</h5>
                        <p className={style.cardtext}>R$99,99</p>
                        <div className={style.btn}>
                        <a href="#" className={style.button}>Adicionar ao Carrinho</a>
                        <a href="./Product.jsx" className={style.button}>Ver produto</a>
                        </div>
                    </div>
                </div>


            </div>

            <div className={style.container}>
                <div className={style.card} >
                    <img src="./src/images/eco.jpg" className={style.cardimgtop} alt="..." />
                    <div className={style.cardbody}>
                        <h5 className={style.cardtitle}>Ecobag Iracambi</h5>
                        <p className={style.cardtext}>R$49,99</p>
                        <div className={style.btn}>
                        <a href="#" className={style.button}>Adicionar ao Carrinho</a>
                        <a href="./src/Components/Product.jsx" className={style.button}>Ver produto</a>
                        </div>
                    </div>
                </div>


            </div>

            <div className={style.container}>
                <div className={style.card} >
                    <img src="./src/images/garrafa.jpg" className={style.cardimgtop} alt="..." />
                    <div className={style.cardbody}>
                        <h5 className={style.cardtitle}>Garrafa Iracambi</h5>
                        <p className={style.cardtext}>R$30,00</p>
                        <div className={style.btn}>
                        <a href="#" className={style.button}>Adicionar ao Carrinho</a>
                        <a href="./src/Components/Product.jsx" className={style.button}>Ver produto</a>
                        </div>
                    </div>
                </div>


            </div>

            

        </div> 

            

        </>
    )
}