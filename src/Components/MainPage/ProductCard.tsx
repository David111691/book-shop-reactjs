import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ book }) {
  const { author, comments_count, poster_url, price, rating, title } = book;

  return (
    <div className={styles.product_card}>
      <div className={styles.image_container}>
        <img className={styles.card_image} src={poster_url} />
        <span className={styles.card_icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class={styles.card_icon_svg}
          >
            <path
              d="M9.154 3.5h7.235c.14 0 .254.123.254.275 
				0 .043-.01.085-.028.123l-3.451 7.37a.285.285 0 0 0 .112.37c.035.019.075.03.114.03h4.287c.14 0 
				.254.122.254.274a.287.287 0 0 1-.073.192l-8.914 9.783a.24.24 0 0 1-.36.003.29.29 0 0 
				1-.064-.277l1.807-6.308c.041-.144-.034-.298-.168-.343a.234.234 0 0 0-.075-.012H6.748c-.14 0-.254-.123-.254-.275a.27.27 
				0 0 1 .007-.063l2.405-10.93a.26.26 0 0 1 .248-.212Z"
            ></path>
          </svg>
        </span>
      </div>
      <span className={styles.price}>{price} ₽</span>
      <Link className={styles.item_link} to="#">
        {title}
      </Link>
      <span className={styles.author}>{author}</span>

      <div className={styles.rating}>
        <div className={styles.rating_align_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="product-rating__icon"
          >
            <path
              fill="#FFC533"
              d="M12.388 18.129a.75.75 0 0 0-.777 0l-4.639 2.813a.75.75 0 0 1-1.124-.79l1.134-5.622a.75.75 0 0 
					0-.219-.693l-4.09-3.876a.75.75 0 0 1 .433-1.29l5.407-.6a.75.75 0 0 0 .608-.452l2.188-5.162a.75.75 
					0 0 1 1.381 0l2.188 5.162a.75.75 0 0 0 .608.452l5.407.6a.75.75 0 0 1 .433 1.29l-4.09 3.876a.75.75 0 0 0-.22.693l1.135 
					5.622a.75.75 0 0 1-1.124.79l-4.639-2.813Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="product-rating__icon"
          >
            <path
              fill="#FFC533"
              d="M12.388 18.129a.75.75 0 0 0-.777 0l-4.639 2.813a.75.75 0 0 1-1.124-.79l1.134-5.622a.75.75 0 0 
					0-.219-.693l-4.09-3.876a.75.75 0 0 1 .433-1.29l5.407-.6a.75.75 0 0 0 .608-.452l2.188-5.162a.75.75 
					0 0 1 1.381 0l2.188 5.162a.75.75 0 0 0 .608.452l5.407.6a.75.75 0 0 1 .433 1.29l-4.09 3.876a.75.75 0 0 0-.22.693l1.135 
					5.622a.75.75 0 0 1-1.124.79l-4.639-2.813Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="product-rating__icon"
          >
            <path
              fill="#FFC533"
              d="M12.388 18.129a.75.75 0 0 0-.777 0l-4.639 2.813a.75.75 0 0 1-1.124-.79l1.134-5.622a.75.75 0 0 
					0-.219-.693l-4.09-3.876a.75.75 0 0 1 .433-1.29l5.407-.6a.75.75 0 0 0 .608-.452l2.188-5.162a.75.75 
					0 0 1 1.381 0l2.188 5.162a.75.75 0 0 0 .608.452l5.407.6a.75.75 0 0 1 .433 1.29l-4.09 3.876a.75.75 0 0 0-.22.693l1.135 
					5.622a.75.75 0 0 1-1.124.79l-4.639-2.813Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="product-rating__icon"
          >
            <path
              fill="#FFC533"
              d="M12.388 18.129a.75.75 0 0 0-.777 0l-4.639 2.813a.75.75 0 0 1-1.124-.79l1.134-5.622a.75.75 0 0 
					0-.219-.693l-4.09-3.876a.75.75 0 0 1 .433-1.29l5.407-.6a.75.75 0 0 0 .608-.452l2.188-5.162a.75.75 
					0 0 1 1.381 0l2.188 5.162a.75.75 0 0 0 .608.452l5.407.6a.75.75 0 0 1 .433 1.29l-4.09 3.876a.75.75 0 0 0-.22.693l1.135 
					5.622a.75.75 0 0 1-1.124.79l-4.639-2.813Z"
            ></path>
          </svg>

          <span className={styles.stars_label}>4</span>
        </div>
        <div className={styles.comments_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="product-reviews-count__icon"
          >
            <path d="M18 2.999a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H8.472a1 1 0 0 0-.447.106l-3.578 2.788A1 1 0 0 1 3 20V6a3 3 0 0 1 3-3z"></path>
          </svg>
          <span className={styles.comments_label}>{comments_count}</span>
        </div>
      </div>

      <div className={styles.buy_container}>
        <button className={styles.buy_button}>Купить</button>
        <button className={styles.buy_bookmark}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v17.5a1 1 0 0 1-1.508.861L12 17.938l-7.492 4.423A1 1 0 0 1 3 21.5V4Zm16 0H5v15.748l6.492-3.832a1 1 0 0 1 1.016 0L19 19.748V4Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
