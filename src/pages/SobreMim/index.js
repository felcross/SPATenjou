import styles from "./SobreMim.module.css";

import PostModelo from "components/PostModelo";


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbYZf0Al-4e1rDgxLiV6Pqiu_oePdrYXQhQ&usqp=CAU"
            titulo="Regras de Combate"
        >
    

            <img
                src="https://comicvine.gamespot.com/a/uploads/original/0/77/5121921-0054165295-Rikuo.PNG"
                alt="yokais"
                className={styles.fotoSobreMim}
            />
              <h4 className={styles.subtitulo}>
              AÇÕES DE COMBATE
              </h4>
            <p className={styles.paragrafo}>
            VOCE TEM DIREITO A 3 AÇÕES POR TURNO
            <p className={styles.paragrafo}> 
            1 DE MOVIMENTO
            </p>
            <p className={styles.paragrafo}> 
            1 ATAQUE
            </p>
            <p className={styles.paragrafo}> 
            1 DE BONUS
            </p>
            </p>
            <h4 className={styles.subtitulo}>
             MOVIMENTO 
              </h4>
            <p className={styles.paragrafo}>
            ESSA AÇÃO É DIVIDIDA EM DUAS, ANTES E DEPOIS DE AGIR.
            USANDO PRIMEIRO COM VEL DEPOIS COM METADE DE DES
            </p>
            <h4 className={styles.subtitulo}>
            ATAQUE/ATAQUEMAGICO 
              </h4>
            <p className={styles.paragrafo}>
            ESSA AÇÃO PODE SER USADA PARA ATAQUE NORMAL CORPOCORPO OU MAGICO(GASTANDO MP)
            </p>
            <h4 className={styles.subtitulo}>
            BONUS 
              </h4>
            <p className={styles.paragrafo}>
            PODE USAR DONS DE YOKAIS OU JUTSUS
            </p>
            <h4 className={styles.subtitulo}>
            REGRAS 
              </h4>
            <p className={styles.paragrafo}>
            Movimentação
            1 ponto de vel = 1 metro.
            <p className={styles.paragrafo}>
            após fazer sua ação vc usa metade da sua DES pra se mover.
            cada ponto valendo 1 metro.
            </p>
        
            </p>
            <p className={styles.paragrafo}>
            TODO JUTSU se usa a metade de sua ENER
            <p className={styles.paragrafo}> 
            EX: se eu tenho 4 de ENER uso duas vezes por dia.
            </p>
            </p>
            <p className={styles.paragrafo}>
            TODO DOM YOKAI se usa a metade de sua ENER/ e DURA total da SUA constituição TURNOS. 
            todo poder yokai dura turnos.
            <p className={styles.paragrafo}> 
            EX: se eu tenho 4 de ENER e 4 de CONST uso 2 vezes por dia e esse poder dura 4 TURNOS.            </p>
           </p>
           
        </PostModelo>
    )
}