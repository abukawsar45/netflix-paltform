
import { useState } from 'react';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
      email: '',
      password: '',
    });

    const handleSignIn = async () => {
      console.log(formValues)
    };
  return (
    <div className='relative flex flex-col  items-center mt-0'>
      <BackgroundImage />
      <div className='absolute mx-auto bg[rgba(0, 0, 0, 0.5)] '>
        <Header />
        <div className=' flex flex-col justify-center items-center '>
          <div className='flex flex-col gap-2 justify-center items-center my-2 mb-4'>
            <h1 className='text-emerald-400 text-3xl md:text-4xl lg:text-5xl '>
              Unlimited movies, TV shows and more.
            </h1>
            <h4 className='text-white text-xl '>
              Watch anywhere. Cancel anytime.
            </h4>
            <h6 className='text-white'>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className='form flex gap-4'>
            <input
              className='input input-bordered input-primary w-full max-w-xs'
              type='email'
              placeholder='Email address'
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name='email'
              value={formValues.email}
            />
            {showPassword && (
              <input
                className='input input-bordered input-primary w-full max-w-xs'
                type='password'
                placeholder='Password'
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name='password'
                value={formValues.password}
              />
            )}
            {!showPassword && (
              <button
                onClick={() => setShowPassword(true)}
                className='btn btn-primary'
              >
                Get Started
              </button>
            )}
          </div>
          <div>
            { showPassword && <button onClick={ handleSignIn } className='btn btn-info my-4'>Sing Up</button> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;