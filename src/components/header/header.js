import './header.css';
import teelee from '../../assets/teelee.jpg';

function Header() {
    return (
      <div className="Header">
        <img src={teelee} alt={"teelee"} className='Image'/> 
      </div>
    );
  }
  
  export default Header;