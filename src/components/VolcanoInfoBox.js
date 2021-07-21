const VolcanoInfoBox = ({ volcanoInfo }) => {
    /**
     * VolcanoInfoBox is a display that contains event ID and a source link
     * of each volcano event.
     */
    return (
        <div className="volcano-info-box">
            <h2>{volcanoInfo.title}</h2>
            <ul>
                <li>ID: <strong>{volcanoInfo.id}</strong></li>
                <li><a href={volcanoInfo.sources.url} target="_blank" rel="noreferrer">Learn More</a></li>
            </ul>
        </div>
    )
}

export default VolcanoInfoBox
