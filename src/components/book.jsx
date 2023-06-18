const Book = ({title, image, description, charecters, action}) => {
    return (
    <div className="BookDiv">
        <div className="img-box">
            <img src={image} alt={title} />
        </div>
        <div className="book">
            <h1 className="title"> {title} </h1>
            <p className="description"> {description} </p>
            <div className="char-box">
                <p className="chars-par">Characters:</p>
                <ul className="char-list">
                    {charecters.map((char) => <li>{char}</li> )}
                </ul>
            </div>
            <button className="btn" onClick={() => action(title, charecters)}>Button</button>
        </div>
    </div>
    )
}

export default Book

