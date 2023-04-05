import styles from './Banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Otaku Fighters Project
                </h1>

                <p className={styles.paragrafo}>
                    Bem Vindo aos textos de aprensentação do mundo TenjouTenje feito para testar o sistema OtakuFighters.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/falling-dice-rpg-design-me.jpg"
                    aria-hidden={true}
                    alt="imagen de dados"
                />

                <img
                    className={styles.minhaFoto}
                    src="https://cdn-images.threadless.com/threadless-media/artist_shops/shops/kansaichick/products/331701/shirt-1506785867-bcbb4cfa105ebcc04b2741d677a5d51d.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19"
                    alt="logo yokai"
                />
            </div>
        </div>
    )
}