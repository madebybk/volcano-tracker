import loader from './loading.gif'

/**
 * Loader component displays a loading gif when the app is
 * fetching data from API.
 */
const Loader = () => {
    return (
        <div className="loader">
            <img src={loader} alt="Loading" />
        </div>
    )
}

export default Loader
