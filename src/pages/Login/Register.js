import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    let signInError;
    if (error || gError || updateError) {
        signInError = <p className='text-red-400'>{error?.message || gError?.message || updateError?.message}</p>

    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name, photoURL: data.photo })
        navigate("/appointment")
        console.log("done");
    }
    if (user) {
        toast.success("Success fully user created")
    }
    return (
        <div>
            <PageTitle title="Register"></PageTitle>
            <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-20">
                <h1 className='text-2xl font-bold text-primary pt-7'>Register</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" {...register("name",
                                {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                    pattern: {
                                        value: /[a-zA-Z]/,
                                        message: 'Please use only alphabet'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text text-red-500">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span className="label-text text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" {...register("email",
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
                    <Link to="/login"><p> Already user? Please Login</p></Link>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-secondary">SignIn with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;