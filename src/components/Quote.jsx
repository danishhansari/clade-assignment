import quoteAuthorIcon from "../assets/quoteAuthor.png"
const Quote = () => {
    return (
        <div>
            <h2>"A quote from a Atlassian."</h2>
            <div className="flex items-center">
                <img src={ quoteAuthorIcon } alt="Author" />
                <div className="flex flex-col">
                    <h3>Name</h3>
                    <p>Description</p>
                </div>
            </div>
        </div>
    )
}

export default Quote