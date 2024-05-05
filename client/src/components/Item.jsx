import React, { useEffect, useState } from 'react';
import star from '../assets/star.png';
import emptyStar from '../assets/empty-star.png';

const Item = (props) => {
  const {image, name, price, rating_rate, rating_count, description, category} = props;
  const ratingStars = [];
  for(let i = 1; i < 6; i++){
    if(i <= rating_rate) ratingStars.push(<img className='star' height='18px' width='18px' src={star}/>);
    else ratingStars.push(<img className='emptyStar' height='18px' width='18px' src={emptyStar}/>);
  }

  const [isHovered, setIsHovered] = useState(false);
  const [itemDescription, setItemDescription] = useState(
    <div className='shopping_item_description'>
      <div className='shopping_item_name'>
        <p>{name}</p>
      </div>
      <div className='shopping_item_rating_price'>
        <p>Rating: {ratingStars}</p>
        <p>${price}</p>
      </div>
    </div>
  );

  useEffect(() => {
    if(isHovered){
      setItemDescription(
        <div className='enlarged_shopping_item_description'>
          <div className='shopping_item_scrollbar'>
            <div className='shopping_item_summary'>
              <p className='shopping_item_name'>{name}</p>
              <div className='shopping_item_rating'>
                <p>Rating:&nbsp;{rating_rate}</p>
                {ratingStars}
                <p>&nbsp;({rating_count})</p>
              </div>
              <p>{description}</p>
            </div>
          </div>
          <div className='enlarged_shopping_item_addCart_price'>
            <button>Add to Cart</button>
            <p>${price}</p>
          </div>
        </div>
      );
    }
    else {
      setItemDescription(
        <div className='shopping_item_description'>
          <div className='shopping_item_name'>
            <p>{name}</p>
          </div>
          <div className='shopping_item_rating_price'>
            <p>Rating: {rating_rate}</p>
            <p>${price}</p>
          </div>
        </div>
      );
    }
  }, [isHovered])

  return (
    <div 
      className={isHovered ? 'enlarged_shopping_item' : 'shopping_item'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        className='shopping_item_photo'
        height={isHovered ? '400px' : '300px'}
        width={isHovered ? '250px': '250px'}
        src={image}
      />
      {itemDescription}
    </div>
  )
};

export default Item;