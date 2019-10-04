import { colors } from '../styles'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
      <div className="price">{`Por: R$${price}`}</div>
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

export default ({ products = [] }) => {
  const router = useRouter()
  const { page: currentPage } = router.query

  return (
    <section>
      <h4>Sua seleção especial</h4>

      <div className="catalogue-list">
        {products.map((product, key) => <ProductCard key={key} {...product} />)}
      </div>

      <Link href={`/${+currentPage + 1}`}>
        <button className="load-more-button">
          Ainda mais produtos aqui!
        </button>
      </Link>


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
}
