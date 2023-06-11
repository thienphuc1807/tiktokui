import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner ,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
console.log(images);
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="Tiktoklogo" />
                </div>
                <div className={cx("search")}>
                    <input placeholder="Tìm kiếm" />
                    <button className={cx("clear-btn")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon
                        className={cx("loading")}
                        icon={faSpinner}
                    />
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx("action")}></div>
            </div>
        </header>
    );
}

export default Header;
