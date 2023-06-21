import { useEffect, useState } from "react"
import FilterBtn from "./filterBtn/FilterBtn"
import useFetch from "../../hooks/useFetch"
import FilterColumn from "./filterColumn/FilterColumn"
import { Spinner } from "react-bootstrap"

const FilterForm = () => {

    const [selectProjects, setSelectProjects] = useState(null)
    const [roomValues, setRoomValues] = useState(null)
    const [servData, setServData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch('https://jsproject.webcademy.ru/itemsinfo')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSelectProjects(data.complexNames)
                setRoomValues(data.roomValues)
                setServData(data)
                setIsLoading(false)
                console.log('servDatata', servData)
            })
    }, [])

    return (
        <form >
            <div className="heading-1">Выбор квартир:</div>
            <div className="filter">
                <div className="filter__col">
                    <div className="filter__label">Выбор проекта:</div>
                    <select name="complex" className="filter__dropdown">
                        <option value="all">Все проекты</option>
                        {selectProjects && selectProjects.map(select =>
                            <option key={select} value={select}>{select}</option>
                        )}
                    </select>
                </div>
                <div className="filter__col rooms">
                    <div className="filter__label">Комнат:</div>
                    {isLoading && (
                        <div className="center">

                            <Spinner animation="border" >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </Spinner>
                        </div>

                    )}
                    <div className="rooms__wrapper">
                        {roomValues && roomValues.map(value =>
                            <>
                                <input
                                    key={value}
                                    name="rooms"
                                    type="checkbox"
                                    className="rooms__checkbox"
                                    value={value}
                                />
                                <label className="rooms__btn">{value}</label>
                            </>
                        )}
                    </div>
                </div>

                {servData &&
                    <>
                        <FilterColumn servData={servData} label='Площадь:' value='м2' />
                        <FilterColumn servData={servData} label='Стоимость:' value='₽' />

                    </>
                }
            </div>
            <FilterBtn />
        </form>
    )
}

export default FilterForm