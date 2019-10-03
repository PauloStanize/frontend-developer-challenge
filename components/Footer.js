import { colors } from '../styles'

export default (params) => (
  <footer>
    <h5>Testando suas habilidades em HTML, CSS e JS.</h5>
    <h5>Linx Impulse 2019</h5>
    <h5>2019</h5>

    <style jsx>{`
      footer {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;

        background: ${colors.primaryDark};
        height: 201px;
        border: 1px solid ${colors.primaryDark};
      }

      h5 {
        color: ${colors.secondary};
        font-family: "Helvetica Neue";
        opacity: 1;
        letter-spacing: 0;
        font-size: 12px;
        line-height: 18px;
      }
    `}</style>
  </footer>
)
