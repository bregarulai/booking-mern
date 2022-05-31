import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <Link className='navbar__logo' to='/'>
          BregaBooking
        </Link>
        <div className='navbar__items'>
          <button className='navbar__button'>Register</button>
          <button className='navbar__button'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
