const FilterColInput = ({placeholder ,value, range, rangeValue}) => {
    return ( 
        <div className="range">
            <label className="range__label">{range}</label>
            <input
                type="number"
                name="pricemin"
                min="0"
                className="range__input "
                value={placeholder}
                placeholder={placeholder}
            />
            <div className="range__value">{rangeValue}</div>
        </div>
     )
}
// range__input--price
export default FilterColInput