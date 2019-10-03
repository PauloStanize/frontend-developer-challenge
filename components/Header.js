import { colors } from '../styles'

export default (params) => (
  <header>
    <h4>uma seleção de produtos</h4>
    <h2>especial para você</h2>
    <h5>Todos os produtos desta lista from selecionados a partir da sua navegação. Aproveite!</h5>

    <div className="buttons">
      <button>Conheça a Linx</button>
      <button>Ajude o algorítimo</button>
      <button>Seus produtos</button>
      <button>Compartilhe</button>
    </div>

    <style jsx>{`
      header {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;

        background: ${colors.primaryDark};
        height: 320px;
      }

      h2, h4, h5 {
        color: ${colors.secondary};
        font-family: "Helvetica Neue";
        opacity: 1;
        letter-spacing: 0;
      }

      h2 {
        font-weight: bold;
        font-size: 40px;
        line-height: 49px;
      }

      h4 {
        font-size: 20px;
        line-height: 24px;
      }

      h5 {
        margin-top: 24px;
        font-size: 14px;
        line-height: 16px;
      }

      .buttons {
        display: flex;
        justify-content: center;
        margin-top: 50px;
      }

      button {
        font-size: 14px;
        box-shadow: 0px 1px 6px #00000029;
        width: 160px;
        min-width: 160px;
        height: 40px;
        margin: 0 20px;
      }
    `}</style>
  </header>
)
