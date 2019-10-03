import { colors } from '../styles'

const products = {"products":[{"id":0,"name":"Product Number 0","image":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829307","oldPrice":361,"price":342,"description":"Product long description number 0 just to make more than one like of text.","installments":{"count":10,"value":34.2}},{"id":1,"name":"Product Number 1","image":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6506376","oldPrice":145,"price":119,"description":"Product long description number 1 just to make more than one like of text.","installments":{"count":10,"value":11.9}},{"id":2,"name":"Product Number 2","image":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6747399","oldPrice":169,"price":147,"description":"Product long description number 2 just to make more than one like of text.","installments":{"count":10,"value":14.7}},{"id":3,"name":"Product Number 3","image":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6747399","oldPrice":170,"price":141,"description":"Product long description number 3 just to make more than one like of text.","installments":{"count":10,"value":14.1}},{"id":4,"name":"Product Number 4","image":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6670538","oldPrice":401,"price":376,"description":"Product long description number 4 just to make more than one like of text.","installments":{"count":10,"value":37.6}},{"id":5,"name":"Product Number 5","image":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6624363","oldPrice":138,"price":125,"description":"Product long description number 5 just to make more than one like of text.","installments":{"count":10,"value":12.5}},{"id":6,"name":"Product Number 6","image":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6124117","oldPrice":271,"price":244,"description":"Product long description number 6 just to make more than one like of text.","installments":{"count":10,"value":24.4}},{"id":7,"name":"Product Number 7","image":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6875461","oldPrice":411,"price":381,"description":"Product long description number 7 just to make more than one like of text.","installments":{"count":10,"value":38.1}}],"nextPage":"frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2"}


const ProductCard = ({ id, name, image, oldPrice, price, description, installments: { count, value } = {} }) => {
  const imageHeight = '150'

  return (
    <div className="card">
      <figure>
        <img src={image} alt="Produto" height={imageHeight} />
      </figure>
      <div className="name">{name}</div>
      <p className="description">{description}</p>
      <div className="old-price">{`De: R$${oldPrice}`}</div>
      <div className="price">{`Por: R$${oldPrice}`}</div>
      <div className="installments">{`ou ${count}x de R$${value}`}</div>
      <button>
        Comprar
      </button>

      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          justify-content: left;
          text-align: left;

          height: 350px;
          width: 200px;
        }

        figure {
          width: 100%;
          height: ${imageHeight}px;
          margin-bottom: 15px;
        }

        .name {
          margin-bottom: 10px;
          font-size: 14px;
          line-height: 16px;
        }

        .description {
          margin-bottom: 10px;
          font-size: 12px;
          line-height: 16px;
        }

        .old-price {
          margin-bottom: 6px;
          font-size: 12px;
          line-height: 16px;
        }

        .price {
          margin-bottom: 6px;
          font-size: 16px;
          font-weight: bold;
          line-height: 16px;
        }

        .installments {
          margin-bottom: 10px;
          font-size: 12px;
          line-height: 16px;
        }
      `}</style>
    </div>
  )
}

export default (params) => (
  <section>
    <h4>Sua seleção especial</h4>

    <div className="catalogue-list">
      {products.products.map((product, key) => <ProductCard key={key} {...product} /> )}
    </div>

    <button className="load-more-button">
      Ainda mais produtos aqui!
    </button>

    <style jsx>{`
      section {
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;
        padding: 0 100px;

        background: ${colors.secondary};
        color: ${colors.primary};
      }

      h4 {
        margin: 50px 0;
      }

      .catalogue-list {
        display: inline-grid;
        width: 100%;
        padding: 0, 400px;
        grid-template-columns: repeat(auto-fit, 200px);
        grid-gap: 40px;
      }

      .load-more-button {
        margin-top: 40px;
        width: 260px;
      }
    `}</style>
  </section>
)
