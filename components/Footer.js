import { colors } from '../styles'

export default (params) => (
  <footer>
    <h6>Testando suas habilidades em HTML, CSS e JS.</h6>
    <h6>Linx Impulse 2019</h6>
    <h6>2019</h6>

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

      h6 {
        color: ${colors.secondary};
        font-family: "Helvetica Neue";
      }
    `}</style>
  </footer>
)
