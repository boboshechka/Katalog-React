import FilterForm from "../components/FilterForm/filterForm"
import ListingObjs from "../components/ListingObj/ListingObjs"

const MainPage = () => {
    return (
        <div className="container">
            <FilterForm />
            <ListingObjs />
        </div>
    )
}

export default MainPage