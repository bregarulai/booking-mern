import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';

const Header = ({ type }) => {
  return (
    <div className='header'>
      <div
        className={
          type === 'hotels'
            ? 'header__container header__container--hotels'
            : 'header__container'
        }
      >
        <div className='header__list'>
          <div className='header__item'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='header__item'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='header__item'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className='header__item'>
            <FontAwesomeIcon icon={faBed} />
            <span>Acttractions</span>
          </div>
          <div className='header__item'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
