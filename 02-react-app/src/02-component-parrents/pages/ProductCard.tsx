
import style from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductCard = () => {

    // console.log(style);

  return (
    <div className={style.productCard}>
        {/* <img className={ style.productImg } src="./coffee-mug.png" alt="Coffe Mug" /> */}
        <img className={ style.productImg } src={ noImage } alt="Coffe Mug" />

        <span className={style.productDescription}>Coffe Mud</span>



    </div>
  )
}
