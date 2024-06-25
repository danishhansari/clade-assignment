import quoteAuthorIcon from "../assets/quoteAuthor.png"
const Quote = () => {
    return (
        <div className="shadow-lg rounded-lg px-8 py-6">
            <h2 className="text-xl font-medium">"A quote from a Atlassian."</h2>
            <div className="flex items-center gap-4 mt-6">
                <img src={ quoteAuthorIcon } className="w-12 h-12 rounded-full" alt="Author" />
                <div className="flex flex-col text-base">
                    <h3 className="font-medium">Name</h3>
                    <p className="text-gray-500">Description</p>
                </div>
            </div>
        </div>
    )
}

export default Quote