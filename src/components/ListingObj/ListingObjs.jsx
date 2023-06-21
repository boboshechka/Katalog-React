import { useEffect, useState } from "react"
import ListingCards from "./ListingCards"
import { Spinner } from "react-bootstrap"

const ListingObjs = () => {

    const [cards, setCards] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsproject.webcademy.ru/items')
            .then(response => response.json())
            .then(cards => {
                console.log(cards)
                setCards(cards)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="cards-wrapper">
            <div className="container p-0 pt-5" style={{ paddingTop: '3rem' }}>
                <div className="row">
                    {isLoading && (
                        <div className="center">

                        <Spinner animation="border" >
                            <span className="visually-hidden">
                                Loading...
                            </span>
                        </Spinner>
                        </div>

                    )}
                    {cards &&
                        <ListingCards cards={cards} />
                    }
                </div>
            </div>
        </div>


    )
}

export default ListingObjs