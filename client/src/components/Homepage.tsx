import menPhoto from '../assets/menPhoto.jpg';
import homepageGIF from '../assets/homepageGIF.mp4';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  const handleMenButton = () => navigate('./men');
  const handleWomenButton = () => navigate('./women');
  
  return (
    <div className='homepage'>
      <video className="youtube-player" width="100%" autoPlay loop={true} muted={true} role='video'>
        <source src={homepageGIF} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className='menPhoto'>
        <div className='menPhoto_description'>
          <h1>Men Clothes</h1>
          <button onClick={handleMenButton}>Shop Now!</button>
        </div>
        <img width='800px' height='800px' src={menPhoto} alt='menPhoto'/>
      </div>
      <div className='womenPhoto'>
        <div className='womenPhoto_description'>
          <h1>Women Clothes</h1>
          <button onClick={handleWomenButton}>Shop Now!</button>
        </div>
        <img src='https://fashiondressesforless.com/cdn/shop/products/901509964533596160_800x.jpg?v=1650400112' alt='womenPhoto'/>
      </div>
    </div>
  )
}

export default Homepage;