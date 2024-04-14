import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useGlobalStore from '../../state/GlobalState'
import ErrorSvg from '../../assets/ErrorSvg'
import XIcon from '../../assets/XIcon'
import { signUpFn } from '../../firebase/firebaseAuth'
import { setFn } from '../../firebase/firebaseRealtimeDb'
import genErrMsg from '../../utils/genErrMsg'
import { UserCredential } from 'firebase/auth'

export default function Signup() {
  const navigate = useNavigate()
  const setUser = useGlobalStore((state) => state.setUser)

  // modal controls
  const { signupModalOpen, setsignupModalOpen } = useGlobalStore()

  // append to body if modal toggles
  useEffect(() => {
    if (signupModalOpen) document.body.classList.add('modal-fix-blur')
    else document.body.classList.remove('modal-fix-blur')

    return () => {
      document.body.classList.remove('modal-fix-blur')
    }
  }, [signupModalOpen])

  // handle keyboard event (ESC)
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key == 'Escape') setsignupModalOpen(false)
    }
    document.documentElement.addEventListener('keydown', handleKeyDown)
    return () => {
      document.documentElement.removeEventListener('keydown', handleKeyDown)
    }
  }, [setsignupModalOpen])

  // form validation
  const formSchema = z.object({
    name: z
      .string()
      .trim()
      .toLowerCase()
      .min(1, 'Please enter your name')
      .min(5, 'Name must be min 5 characters long'),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .min(1, 'Please enter your email')
      .email(),
    password: z
      .string()
      .trim()
      .min(1, 'Please enter your password')
      .min(8, 'Password must be min 8 characters long'),
  })

  type TForm = z.infer<typeof formSchema>

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  // form submission and db calls
  // Individual level error handling
  const onSubmit: SubmitHandler<TForm> = async ({ name, email, password }) => {
    let user = undefined
    let userObj = undefined
    // auth
    try {
      user = await signUpFn(email, password)
      toast.loading('Creating your account')
    } catch (err) {
      console.error(err)
      toast.error(
        <p className='text-center text-sm'>{genErrMsg(err as string)}</p>,
      )
      return // return from the function to prevent errors down the code
    }

    // database
    try {
      userObj = {
        uid: user.user.uid,
        name,
        email,
        coursesPurchased: ['null'],
      }
      await setFn(`users/${(user as UserCredential).user.uid}`, userObj)
    } catch (err) {
      toast.dismiss()
      console.error(err)
      if (typeof err == 'string')
        toast.error(<p className='text-center text-sm'>{err as string}</p>)
      else
        toast.error(
          <p className='text-center text-sm'>Unknown error, check console</p>,
        )

      return
    }

    // //'This does not run. The function returns in case of error. Not possible with aync-catch'

    // redirect after a timeout
    setTimeout(() => {
      toast.dismiss()
      setUser(userObj)
      navigate('/user')
      setsignupModalOpen(false)
    }, 600)
  }
  const onError: SubmitErrorHandler<TForm> = (err) => console.warn(err)

  return (
    <div className='signup modal-wrapper fixed inset-0 z-20 grid max-h-screen max-w-[100vw] place-content-center overflow-auto bg-white/75 px-4'>
      <section className='form smooth-box-shadow relative rounded-md bg-white p-8 shadow-md'>
        <span className='close text-text-gray-200 absolute -bottom-[50%] left-1/2 w-max -translate-x-1/2 rounded-md  p-4 text-sm'>
          <code>[ESC]</code> to close
        </span>

        <button
          onClick={() => {
            setsignupModalOpen(false)
          }}
          className='close-modal absolute -right-2.5 -top-2.5 rounded-full bg-white'
        >
          <XIcon />
        </button>
        <h2 className='mb-6 text-2xl font-semibold'>Signup</h2>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className='grid gap-y-4'>
            {/* input name */}
            <div>
              <label className='input input-bordered flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='h-4 w-4 opacity-70'
                >
                  <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
                </svg>{' '}
                <div className='relative'>
                  <input
                    {...register('name')}
                    type='name'
                    id='name'
                    name='name'
                    className='grow'
                    placeholder='Name'
                  />
                  {errors?.name && <ErrorSvg />}
                </div>
              </label>
              <p className='mt-2 text-xs text-red-600' id='name-error'>
                {errors?.name?.message}
              </p>
            </div>

            {/* input email */}

            <div>
              <label className='input input-bordered flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='h-4 w-4 opacity-70'
                >
                  <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                  <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
                </svg>
                <div className='relative'>
                  <input
                    {...register('email')}
                    type='email'
                    id='email'
                    name='email'
                    className='grow'
                    placeholder='Email'
                  />
                  {errors?.email && <ErrorSvg />}
                </div>
              </label>
              <p className='mt-2 text-xs text-red-600' id='email-error'>
                {errors?.email?.message}
              </p>
            </div>

            {/* input password */}

            <div>
              <label className='input input-bordered flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='h-4 w-4 opacity-70'
                >
                  <path
                    fillRule='evenodd'
                    d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                    clipRule='evenodd'
                  />
                </svg>{' '}
                <div className='relative'>
                  <input
                    {...register('password')}
                    type='password'
                    id='password'
                    name='password'
                    className='grow'
                    placeholder='Password'
                  />
                  {errors?.password && <ErrorSvg />}
                </div>
              </label>
              <p className='mt-2 text-xs text-red-600' id='password-error'>
                {errors?.password?.message}
              </p>
            </div>
            <button type='submit' className='btn btn-neutral font-normal'>
              Signup
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
