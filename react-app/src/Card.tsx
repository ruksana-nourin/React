
// function Card(props:any) {
function Card({text, description, classr}:any) {
    return (
        <>

            <div className="card">
                <img src="https://placehold.co/600x400" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{text}</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className={classr}>Go somewhere</a>
                    </div>
            </div>
        </>
    )

}
export {Card}