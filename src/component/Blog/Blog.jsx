import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';
const Blog = ({blog, addToBookmark,addReadTime}) => {

    const {id,cover,author_img,author_name,posted_date,title,hashtags,reading_time} = blog;

    return (
        <div className="border-2 border-orange-700 p-5">
            <img src={cover} alt="" className="rounded-lg" />

            <div className="flex justify-between my-4">
                <div className="flex gap-3">
                    <img src={author_img} alt="" className="w-12" />
                    <div>
                        <h3>Name: {author_name}</h3>
                        <p className="text-xs text-red-300"> {posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className="text-sm text-red-300 mr-2">{reading_time} min read</span>
                    <button 
                        onClick={()=>addToBookmark(blog)}
                        className='active:text-red-300'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <p className="text-2xl font-bold">{title}</p>
            <p className="flex gap-3 text-red-300 text-sm">
                {
                    hashtags.map((hash ,idx)=> <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button className='mt-4 underline' onClick={()=>addReadTime(reading_time , id)}>See more</button>
        </div>
    );
};


Blog.propTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog;