
import styles from './footer.module.css'

export default function Footer(){
    return(
        <>
            <footer className={styles.footer}>
                    <div className={styles.moldura}>
                        <img  className={styles.icon}  src="https://www.caceres.mt.leg.br/banco-de-imagens/email.png/image" />
                    </div>
                    <div className={styles.moldura}>
                        <img  className={styles.icon}  src="https://www.freepnglogos.com/uploads/logo-telefone-png/icone-telefone-png-download-3.png" />
                    </div>
                    <div className={styles.moldura}>
                        <img  className={styles.icon}  src="https://www.pngall.com/wp-content/uploads/15/Black-Instagram-Logo-PNG-HD-Image.png"  />
                    </div>
            </footer>
        
        </>
    )
}