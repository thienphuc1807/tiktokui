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
    faEllipsisVertical,
    faGlobe,
    faCircleQuestion,
    faKeyboard,
    faMoon,
} from "@fortawesome/free-solid-svg-icons";
import AccountItems from "~/component/AccountItems";
import Button from "~/component/Button";
import Menu from "~/component/Propper/Menu";
const cx = classNames.bind(styles);
const menuItems = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: "Tiếng Việt",
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Phản hồi và trợ giúp",
        to: "/upload",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Phím tắt trên bàn phím",
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: "Chế độ tối",
    },
];
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="Tiktoklogo" />
                </div>
                <Tippy
                    interactive={true}
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
                    <Menu items={menuItems}>
                        <button className={cx("more-btn")}>
                            <FontAwesomeIcon
                                className={cx("more-icon")}
                                icon={faEllipsisVertical}
                            />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
