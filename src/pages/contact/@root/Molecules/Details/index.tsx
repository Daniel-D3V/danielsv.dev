import { TypeAnimation } from 'react-type-animation';
import styles from './styles.module.sass';

export const Details = () => {
    return (
        <p className={styles.Description}><TypeAnimation sequence={['Eu não fiz isso', 500, 'Eu tava fazendo e deu preguissa...', 1000, 'Ops... Desculpe, acabei adormecendo e esqueci de terminar esta página, mas não se preocupe! Em breve estará tudo pronto para uso. Espero vê-lo novamente em breve. Até logo! 👋', 1500]} speed={50} /></p >
    )
}