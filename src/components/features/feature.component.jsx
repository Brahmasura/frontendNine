
import style from "./feature.module.scss";

const Feature = ({item}) => {
  const {num, title, disc, image} = item;
   
    return (
      <div className={style.mainDiv}>
        <img src={image} alt={`${image}`}/>
        <div className={style.textDiv}>
            <p>{num}</p>
            <p>{title}</p>
            <p>{disc}</p>
        </div>
      </div>
    )
}

export default Feature;