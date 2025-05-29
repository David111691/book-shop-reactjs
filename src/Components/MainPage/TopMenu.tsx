import { Link } from "react-router-dom";

import styles from "./TopMenu.module.css"

function TopMenu() {
    return (
        <div className={styles.list_container}>
            <ul className={styles.list}>
                <li className={styles.list_item}>
                    <Link to="#" className={styles.list_link}>
                        <div>
                            <p className={styles.item_title}>Топ-30 великих зарубежных романов</p>
                            <p className={styles.item_description}>Ну это классика!</p>
                        </div>
                        <img src="https://cdn.img-gorod.ru/content/2025/05/23/72-72-1_1748011233173159735.svg" />
                    </Link>

                </li>
                <li className={styles.list_item}>
                    <Link to="#" className={styles.list_link}>
                        <div>
                            <p className={styles.item_title}>Эксклюзивно в «Читай-городе»</p>
                            <p className={styles.item_description}>Невозможно пропустить!</p>
                        </div>
                        <img src="https://cdn.img-gorod.ru/content/2023/06/07/72-72_1686139576168796980.svg" />
                    </Link>
                </li>
                <li className={styles.list_item}>
                    <Link to="#" className={styles.list_link}>
                        <div>
                            <p className={styles.item_title}>Книжный дозор</p>
                            <p className={styles.item_description}>Делитесь впечатлениями, получайте бонусы</p>
                        </div>
                        <img src="https://cdn.img-gorod.ru/content/2023/03/06/owl_1678091693954229594.svg" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default TopMenu;
