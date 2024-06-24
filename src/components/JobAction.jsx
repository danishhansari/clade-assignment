const JobAction = () => {
    return (
        <div>
            <div className="flex items-center">
                <button>Delete job</button>
                <button>Edit job</button>
            </div>
            <div className="flex flex-col">
                <div className="flex">
                    <p>Applicants</p>
                    <p>400</p>
                </div>
                <div className="flex">
                    <p>Matches</p>
                    <p>100</p>
                </div>
                <div className="flex">
                    <p>Messages</p>
                    <p>147</p>
                </div>
                <div className="flex">
                    <p>Views</p>
                    <p>800</p>
                </div>
            </div>
        </div>
    )
}

export default JobAction