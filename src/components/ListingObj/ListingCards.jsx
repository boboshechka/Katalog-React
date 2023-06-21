import { Link } from "react-router-dom"

const ListingCards = ({ cards }) => {
    return (
            cards.map(card =>
                <article className="col-md-4">
                    <Link to={`/card/${card.id}`} className="card">
                        <div className="card__header">
                            <div className="card__title">
                                ЖК {card.complex_name}
                            </div>
                            <div className="card__like ${isFaved ? 'card__like--active' : ''}">
                                <i className="fas fa-heart"></i>
                            </div>
                        </div>
                        <div className="card__img">
                            <img src={card.image} alt="План квартиры" />
                        </div>
                        <div className="card__desc">
                            <div className="card__price">
                                <div className="card__price-total">
                                    {card.price_total} ₽
                                </div>
                                <div className="card__price-per-meter">
                                    {card.price_sq_m} ₽/м2
                                </div>
                            </div>

                            <div className="card__params params">
                                <div className="params__item">
                                    <div className="params__definition">
                                        Комнат
                                    </div>
                                    <div className="params__value">{card.rooms}</div>
                                </div>
                                <div className="params__item">
                                    <div className="params__definition">
                                        Площадь
                                    </div>
                                    <div className="params__value">{card.square}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card__footer">
                            <div className="card__art">{card.scu}</div>
                            <div className="card__floor">Этаж {card.floor} из {card.floors_total}</div>
                        </div>
                    </Link>
                </article>
            )
        

    )
}

export default ListingCards