const Quote = ({ companyQuote }) => {
    return (
        <div className="shadow-lg rounded-lg px-8 py-6">
            <h2 className="text-base md:text-xl font-medium">"{ companyQuote.quote }"</h2>
            <div className="flex items-center gap-4 mt-6">
                <img src={ companyQuote.img } className="w-12 h-12 rounded-full" alt="Author" />
                <div className="flex flex-col text-base">
                    <h3 className="font-medium">{ companyQuote.name }</h3>
                    <p className="text-gray-500">{ companyQuote.description }</p>
                </div>
            </div>
        </div>
    )
}

export default Quote