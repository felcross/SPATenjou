import styles from "./SobreMim.module.css";
import PostModelo from "components/PostModelo";
import MultSelect from "./MultSelect";


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa="https://i.etsystatic.com/33893924/r/il/7128b8/3723368689/il_fullxfull.3723368689_48rk.jpg"
            titulo="O Começo de Tudo"
        >
    

            <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/27b10457-948a-4647-a16d-f5dfc0406bd1/dakqo0y-150c750d-7048-4d62-8ef3-d5968e9e85f9.png/v1/fill/w_900,h_465,q_80,strp/hyakki_yakou___nurarikuo_by_taokhang_dakqo0y-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDY1IiwicGF0aCI6IlwvZlwvMjdiMTA0NTctOTQ4YS00NjQ3LWExNmQtZjVkZmMwNDA2YmQxXC9kYWtxbzB5LTE1MGM3NTBkLTcwNDgtNGQ2Mi04ZWYzLWQ1OTY4ZTllODVmOS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.nUu_MNrAz4f5AtSvdyH7UdUj2q3UvYMa524rz2pXBDk"
                alt="yokais"
                className={styles.fotoSobreMim}
            />
              <h4 className={styles.subtitulo}>
               Em construção     
             </h4>
            <p className={styles.paragrafo}>
                 Em construção
            </p>
            <MultSelect/>
            
        
           
        </PostModelo>
    )
}