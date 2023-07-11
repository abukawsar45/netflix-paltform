import background from '../assets/login.jpg';

const BackgroundImage = () => {
  return (
    <div>
      <img className='h-screen w-screen' src={background} alt="background" />
    </div>
  );
};

export default BackgroundImage;