import style from './Profile.module.css';
import { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useService } from "../../../hooks/useService";
import { profileServiceFactory } from "../../../services/profile";
import { useAuthContext } from "../../../contexts/AuthContext";
import { ProfileCard } from "../Cards/ProfileCard";


export const ProfileInfo = () => {
    const { userId, onSubmitLogout } = useAuthContext()
    const [editProfile, setEditProfile] = useState(false);
    const [viewProd, setViewProd] = useState(false);
    const [viewCommen, setViewCommen] = useState(false);
    const [profile, setProfile] = useState({});
    const [prod, setProd] = useState([]);
    const [comment, setComment] = useState([]);
    const [error, setError] = useState([]);
    const ProfileService = useService(profileServiceFactory);

    useEffect(() => {
        ProfileService.getProfile(userId)
            .then(req => {
                setProfile(req);
            });
    }, [userId]);

    useEffect(() => {
        if (viewProd) {
            ProfileService.getProduct(userId)
                .then(req => {
                    setProd(req);
                });
        }
        if (viewCommen) {
            ProfileService.getComment(userId)
                .then(req => {
                    setComment(req);
                });
        }
    }, [viewProd, viewCommen]);

    const onSubmitEdit = async (value) => {
        try {
            const prod = await ProfileService.editProfile(value);
            setProfile(prod);
            setEditProfile(false);
        } catch (err) {
            setError(err.message);
        }
    }

    const onSubmitDelete = async () => {
        await ProfileService.deleteProfile(userId);
        setProfile([]);
        return;
    }

    const deleteProfileConfurm = () => {
        onSubmitDelete();
        onSubmitLogout();
    }

    const viewProduct = () => {
        setProd([]);
        setViewProd(!viewProd)
    }

    const viewComment = () => {
        setComment([]);
        setViewCommen(!viewCommen)
    }

    const { values, changeHandler, onSubmit, changeValue, errors } = useForm({
        username: '',
        email: '',
        year: '',
    }, onSubmitEdit, {
        username: ['required', '5'],
        email: ['required', '5'],
        year: ['required'],
    });

    useEffect(() => {
        if (editProfile) {
            changeValue(profile)
        }
    }, [editProfile]);

    return (
        <div className={style['profile__container']}>
            {!editProfile ? (
                <article className={`${style["profile__info"]} shadow`}>
                    <h3>Profile</h3>
                    <div>
                        <div>
                            <div className={style['info__container']}>
                                <p className="prop">Username: <span className="span">{profile.username}</span></p>
                                <p className="prop">email: <span className="span">{profile.email}</span></p>
                                <p className="prop">year: <span className="span">{profile.year}</span></p>
                            </div>
                            <div className={style['button__container']}>
                                <button className={`btn`} onClick={() => setEditProfile(true)} >Edit</button>
                                <button className={`btn`} onClick={() => deleteProfileConfurm()} >Delete</button>
                            </div>
                        </div>
                    </div>
                </article>
            ) : (
                <section className={`${style["profile__info"]} shadow`}>
                    {!!error.length && (<div className='error_serv'>
                        {error}
                    </div>
                    )}
                    <h3>Edit your Profile</h3>
                    <form onSubmit={onSubmit}>
                        <div>
                            <div className={style['info__container']}>
                                <div>
                                    <p className="prop">Username:
                                        <input type="text" name="username" id="username" value={values.username} onChange={changeHandler} onBlur={changeHandler} placeholder='Your username' />
                                    </p>
                                    {errors.name && (<p className='error'>{errors.username}</p>)}
                                </div>
                                <div>
                                    <p className="prop">Email:
                                        <input type="email" name="email" id="email" value={values.email} onChange={changeHandler} onBlur={changeHandler} placeholder='Your email' />
                                    </p>
                                    {errors.name && (<p className='error'>{errors.email}</p>)}
                                </div>
                                <div>
                                    <p className="prop">Username:
                                        <input type="text" name="year" id="year" value={values.year} onChange={changeHandler} onBlur={changeHandler} placeholder='Your year' />
                                    </p>
                                    {errors.name && (<p className='error'>{errors.year}</p>)}
                                </div>
                            </div>
                            <div className={style['button__container']}>
                                <button className={`btn`} onClick={() => setEditProfile(false)} >Cancel</button>
                                <button type='submit' className={`btn`}>Edit</button >
                            </div>
                        </div>
                    </form >
                </section >
            )
            }

            <div className={style['user__add']}>
                <section className={style['profile__product']}>
                    <div className={`shadow ${style['container__info']}`}>
                        <h2>Your Added Product</h2>
                        <button onClick={() => viewProduct()}>V</button>
                    </div>
                    <div className={style['all-container']}>
                        {prod && prod.map(e => <ProfileCard key={e._id} {...e} />)}
                        {viewProd && !prod.length && (<h2>There are no product.</h2>)}
                    </div>
                </section>

                <section className={style['profile__product']}>
                    <div className={`shadow ${style['container__info']}`}>
                        <h2>Your Added Comment</h2>
                        <button onClick={() => viewComment()}>V</button>
                    </div>
                    <div className={style['all-container']}>
                        {comment && comment.map(e => <ProfileCard key={e._id} {...e} />)}
                        {viewCommen && !comment.length && (<h2>There are no comment.</h2>)}
                    </div>
                </section>
            </div>
        </div >

    );
}