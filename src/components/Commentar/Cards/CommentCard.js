import { Link } from "react-router-dom";

import style from './Comment.module.css';

export const CommentCard = ({ name, commentar, lastUpdate, createAt, ownerId, _id, userId, productId },) => {
    const owner = ownerId === userId;
    return (
        <article className={`${style["comment__list"]} shadow`}>
            <div className={style["comment__top"]}>
                <div className={style['comment__info']}>
                    <p className="prop">Username: <span className="span">{name}</span></p>
                    <div className={style['info__date']}>
                        <p className="prop">Last Update: <span className="span">{lastUpdate}</span></p>
                        <p className="prop">Create: <span className="span">{createAt}</span></p>
                        {owner && <div className={style['comment__owner']}>
                            <p><a href="#">E</a></p>
                            <p><a href="#">D</a></p>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div className={style["comment__area"]}>
                <p className="prop">Commentars:</p>
                <div>
                    <p><span className="span">{commentar}</span></p>
                </div>
            </div>
        </article>
    );
}


// To Do check whether return deleted comment 

/*
isDelete: false

ownerId: "6563098279871e6ad9c62bc9"
*/