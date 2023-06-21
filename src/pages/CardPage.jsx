import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CardsContext } from "../context/CardsContext"
import { Spinner } from "react-bootstrap"

const CardPage = () => {
    const params = useParams()
    const [card, setCard] = useState(null)

    const { isFaved, setIsFaved, isLoading, setIsLoading } = useContext(CardsContext)

    useEffect(() => {
        fetch(`https://jsproject.webcademy.ru/items/${params.id}`)
            .then(response => response.json())
            .then(card => {
                console.log(card)
                setCard('carddddddd', card)
                setIsLoading(false)
            }
            )
    }, [card])

    return (
        <div className="container p-0 pt-5">
            {isLoading && (
                <div className="center">
                    <Spinner animation="border" >
                        <span className="visually-hidden">
                            Loading...
                        </span>
                    </Spinner>
                </div>

            )}
            {card && (
                <>
                    <div className="heading-1">
                        {card.title}, {card.square} м2 за {card.price_total} ₽
                    </div>

                    <div className="object">
                        <div className="object__photo">
                            <div className="object__photo-wrapper">
                                <img src={card.image} alt="" />
                            </div>
                        </div>

                        <div className="object__desc">
                            <div className="object__desc-sector">
                                ${card.complex_name}
                            </div>

                            <div className="object__desc-name">
                                <div className="object__desc-title">
                                    ${card.title}
                                </div>
                                <div className="object__desc-art">${card.scu}</div>

                                <button
                                    className="
                                button-favourite
                                ${isFaved ? 'button-favourite--active' : ''}
                            ">
                                    <i className="fas fa-heart"></i>
                                    <span>
                                        {isFaved ? 'В избранном' : 'В избранное'}
                                    </span>
                                </button>

                            </div>

                            <div className="object__desc-details">

                                <div className="params">
                                    <div className="params__item">
                                        <div className="params__definition">Корпус</div>
                                        <div className="params__value">${card.building}</div>
                                    </div>
                                    <div className="params__item">
                                        <div className="params__definition">Этаж</div>
                                        <div className="params__value">${card.floor}</div>
                                    </div>
                                    <div className="params__item">
                                        <div className="params__definition">Номер</div>
                                        <div className="params__value">${card.flat_number}</div>
                                    </div>
                                    <div className="params__item">
                                        <div className="params__definition">Комнат</div>
                                        <div className="params__value">${card.rooms}</div>
                                    </div>
                                </div>
                                {/* <!-- // params --> */}
                            </div>

                            <div className="details">
                                <div className="details__row">
                                    <div className="details__name">Стоимость</div>
                                    <div
                                        className="details__value details__value--price"
                                    >
                                        ${card.price_total} ₽
                                    </div>
                                </div>
                                <div className="details__row">
                                    <div className="details__name">Цена за м2</div>
                                    <div className="details__value">${card.price_sq_m} ₽/м2</div>
                                </div>
                                <div className="details__row">
                                    <div className="details__name">Площадь</div>
                                    <div className="details__value">${card.square} м2</div>
                                </div>
                            </div>

                            <button className="button-order">Забронировать</button>
                            {/* <button className="button-preview">Записаться на просмотр</button> */}
                        </div>
                    </div>


                    <div className="container p-0">
                        <Link to='/' className="back-to-results">← Вернуться к результатам поиска</Link>
                    </div>
                </>
            )
            }

        </div>
    )
}

export default CardPage