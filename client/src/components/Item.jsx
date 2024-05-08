import React, { useEffect, useState } from 'react';
import star from '../assets/star.png';
import emptyStar from '../assets/empty-star.png';

const Item = (props) => {
  const {image, name, price, rating_rate, rating_count, description, colors} = props;
  const integerRating = Math.floor(rating_rate), fractionalRating = rating_rate - integerRating;
  const ratingStars = [], itemColors = [];

  for(let i = 1; i <= integerRating; i++){
    if(i <= rating_rate) ratingStars.push(<img key={i} className='star' height='18px' width='18px' src={star}/>);
  }

  // if(fractionalRating > 0){
  //   ratingStars.push(
  //     <div className='partialStar'>
  //       <img className='star' height='18px' width='18px' src={star} />
  //       <img className='emptyStar' height='18px' width='18px' src={emptyStar} />
  //     </div>
  //   );
  // }

  for(let i = ratingStars.length + 1; i <= 5; i++) {
    ratingStars.push(<img key={i} className='emptyStar' height='18px' width='18px' src={emptyStar} />);
  }

  for(const color of colors){
    if(color !== 'white' && color !== 'grey'){
      itemColors.push(
        <div 
          className='shopping_item_color' 
          style={{ backgroundColor: color }}
        />
      );
    }
    else{
      itemColors.push(
        <div 
          className='shopping_item_color' 
          style={{ backgroundColor: color, border: '1px solid grey' }}
        />
      );
    }
  }

  const [selectedOption, setSelectedOption] = useState('');
  const [quantity, setQuantity] = useState(1);
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
  
  const options = [
    { label: 'Extra Small', value: 'Extra Small' },
    { label: 'Small', value: 'Small' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Large', value: 'Large' },
    { label: 'Extra Large', value: 'Extra Large' },
  ];

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const handleDecrement = () => {
    if(quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    if(quantity < 10) setQuantity(quantity + 1);
  };

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
              <div className='shopping_item_colors'>
                <p>Color:&nbsp;</p>
                {itemColors}
              </div>
              <div className='shopping_item_size_quantity'>
                <select className='shopping_item_size' value={selectedOption} onChange={handleSelectChange}>
                  <option value=''>Size</option>
                  {options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className='shopping_item_quantity'>
                  <button onClick={handleDecrement}>-</button>
                  <input type="text" value={quantity} />
                  <button onClick={handleIncrement}>+</button>
                </div>
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
  }, [isHovered, selectedOption, quantity])

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