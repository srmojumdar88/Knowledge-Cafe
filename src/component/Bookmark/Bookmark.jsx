

const Bookmark = ({bookmarks,readTime}) => {

    // console.log(bookmarks)

    return (
        <div className="md:w-1/3 md:h-fit mt-6 ">

            <div className=" bg-gray-200 p-5 mb-5 rounded text-2xl font-bold text-blue-600">
                <h2>Spent time on read : {readTime} min</h2>
            </div>

            <div className=" bg-gray-200 p-5 rounded">
            <h2 className="text-xl font-bold border-b-4 border-blue-600">Bookmark:{bookmarks.length}</h2>
                <ul className="mt-5">
                    {
                        bookmarks.map((bookmark,idx )=> <li 
                            key={idx}
                            className="bg-white mb-2 p-2 rounded-md"
                        >{bookmark.title}</li>)
                    }
                </ul>
                
            </div>
        </div>
    );
};

export default Bookmark;