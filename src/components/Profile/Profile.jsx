import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.mainWrapper}>
      <div className={css.container}>
        <img
          className={css.img}
          src={image}
          alt="User avatar"
          width={200}
          height={200}
        />
        <p className={css.mainText}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.mainList}>
        <li className={css.item}>
          <span className={css.itemTitle}>Followers</span>
          <span className={css.itemText}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemTitle}>Views</span>
          <span className={css.itemText}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemTitle}>Likes</span>
          <span className={css.itemText}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
