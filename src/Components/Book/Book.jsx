import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category } = book;

  return (
    
    <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl p-4 border">
      <figure className="bg-[#F3F3F3] rounded-md p-4">
        <img src={image} className="h-[166px]" alt="" />
      </figure>

      <div className="card-body">
        {/* as tag is array we can use map to render each tag dynamically.  */}
        <div className="flex gap-3 justify-start ">
          {tags.map((tag,index) => (
            <button key={index} className="btn btn-xs bg-green-400 text-white">
              {tag}
            </button>
          ))}
        </div>

        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="border-t-2 border-dashed"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
    </Link>
    
  );
};

export default Book;
