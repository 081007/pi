import styles from './conta.module.css'

export default function Conta() {
    return (
        <>
            <div className={styles.box}>

                <form >
                    <h2>Acessar conta</h2>
                    <input type="email" placeholder="E-mail" required />
                    <button>Acessar</button>
                    <h2>Criar conta</h2>
                    <input type="email" placeholder="E-mail" required />
                    <input type="password" placeholder="Senha" required />
                    <button>Criar conta</button>
                </form>
            </div>

        </>

    )
}