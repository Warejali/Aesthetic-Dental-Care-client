import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-400'>{error?.message || gError?.message}</p>

    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (user || gUser) {
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        console.log(data);
    }


    return (
        <div>
            <PageTitle title="Login"></PageTitle>
            <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-20">
                <h1 className='text-2xl font-bold text-primary pt-7'>Login</h1>

                <div className="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email",
                                {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide a valid email'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered" {...register("password",
                                {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Please provide more than 6 character'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input type="submit" className="btn btn-primary w-full max-w-xs" value="Login" />
                    </form>
                    <Link to="/register"><p> New user? Please register</p></Link>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-secondary">SignIn with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;