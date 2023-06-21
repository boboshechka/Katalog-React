import { useState } from "react"
import FilterColInput from "./FIlterColInput"

const FilterColumn = ({ servData, label, value }) => {
    const { priceMin, priceMax, squareMax, squareMin } = servData

    return (
        <div className="filter__col">
            <div className="filter__label">{label}</div>
            <div className="range__wrapper">


                <FilterColInput placeholder={priceMax} range='от' rangeValue='м2' />
                <FilterColInput placeholder={priceMin} range='до' rangeValue='₽' />

                {/* <div className="range">
                    <label className="range__label">до</label>
                    <input
                        type="number"
                        name="pricemax"
                        min="0"
                        className="range__input range__input--price"
                        value="${params.priceMax}"
                        placeholder={priceMax}
                    />
                    <div className="range__value">{value}</div>
                </div> */}
            </div>
        </div>
    )
}

export default FilterColumn