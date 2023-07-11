import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';


const Header = (props) => {

  const navigate = useNavigate();

  return (
    <div className='px-4 py-16 w-screen flex items-center  justify-between'>
      <div className='logo'>
        <img className='h-20' src={logo} alt='logo' />
      </div>
      <div>
        <button
          className='btn btn-secondary'
          onClick={() => navigate(props.login ? '/signin' : '/signup')}
        >
          {props.login ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </div>
  );
};

export default Header;