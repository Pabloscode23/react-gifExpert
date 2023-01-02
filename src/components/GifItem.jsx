export const GifItem = ({ title, id, url }) => {
    return (
        <div className="card">
            <img src={url}></img>
            <p>{title}</p>
        </div>
    )
}
