import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/image";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/component/Propper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AccountItems from "~/component/AccountItems";
import Button from "~/component/Button";
const cx = classNames.bind(styles);
console.log(images);
function Header() {
    const [useSearch, setUseseacrh] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setUseseacrh([1, 2, 3]);
        }, 0);
    });

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="Tiktoklogo" />
                </div>
                <Tippy
                    interactive={true}
                    visible={useSearch.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx("search-results")}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>
                                    Tài khoản
                                </h4>
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                <div className={cx("action")}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>
                    <Button primary>Đăng nhập</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
