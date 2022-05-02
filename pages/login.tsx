import { async } from '@firebase/util'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

type Props = {}

interface Inputs {
  email: string
  password: string
}

const Login = (props: Props) => {
  const { signIn, signUp } = useAuth()
  const [loginAction, setLoginAction] = useState<'signIn' | 'signUp'>()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (loginAction === 'signIn') {
      await signIn(email, password)
    } else if (loginAction === 'signUp') {
      await signUp(email, password)
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>登陆</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/LoginPage/bg_login.jpeg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        src="/LoginPage/Netflix_2015_logo.svg"
        alt="logo"
        width={150}
        height={150}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">用户登陆</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="邮箱"
              className="loginInput"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                请输入正确的邮箱地址
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="密码"
              className="loginInput"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                密码长度应在4-60个字符之间
              </p>
            )}
          </label>
        </div>
        <button
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => setLoginAction('signIn')}
        >
          登陆
        </button>
        <div className="text-[gray]">
          新用户？{' '}
          <button
            type="submit"
            className="text-white hover:underline"
            onClick={() => setLoginAction('signUp')}
          >
            现在注册
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
