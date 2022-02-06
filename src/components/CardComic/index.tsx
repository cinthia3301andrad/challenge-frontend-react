import { IComics } from '../../types/@general'
import { Container } from './styles'

function CardComic(infos: IComics) {
  const { title, description, thumbnail, dates, pageCount, prices } = infos

  return (
    <Container>
      {thumbnail && (
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt="image heroe"
        />
      )}
      <div>
        <h1>{title}</h1>
        <div className="details">
          <p>{new Date(dates[1].date).toDateString()}</p>
          <span />
          <p>{pageCount} pages</p>
          <span />
          <p>
            {
              prices[0].price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              }) /* $2,500.00 */
            }
          </p>
        </div>
        <p>{description}</p>
      </div>
    </Container>
  )
}

export default CardComic
