import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/image";
import TippyHeadless from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import { Wrapper as PopperWrapper } from "~/component/Propper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "tippy.js/dist/tippy.css";
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
    faUser,
    faBookBookmark,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import AccountItems from "~/component/AccountItems";
import Button from "~/component/Button";
import Menu from "~/component/Propper/Menu";
import { MessageIcon, MessageBoxIcon } from "~/component/Icon";
import Images from "~/component/Images";
const cx = classNames.bind(styles);
const menuItems = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: "Tiếng Việt",
        children: {
            title: "Language",
            data: [
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
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

const userMenuItems = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: "Xem hồ sơ",
        to: "/user",
    },
    {
        icon: <FontAwesomeIcon icon={faBookBookmark} />,
        title: "Yêu thích",
        to: "/favorite",
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: "Nhận xu",
        to: "/coin",
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: "Cài đặt",
        to: "/settings",
    },
    ...menuItems,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: "Đăng xuất",
        to: "/logout",
        separate: true,
    },
];

const handleMenuChange = (item) => {
    console.log(item);
};

const currentUser = true;
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="Tiktoklogo" />
                </div>
                <TippyHeadless
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
                </TippyHeadless>
                <div className={cx("action")}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Hộp thư"
                                placement="bottom"
                                delay="0"
                            >
                                <button className={cx("action-btn")}>
                                    <MessageBoxIcon />
                                    <p className={cx("badge")}>1</p>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenuItems : menuItems}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Images
                                className={cx("avatar-menu")}
                                src={""}
                                alt="ThienPhuc"
                                // fallback={images.logo}
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon
                                    className={cx("more-icon")}
                                    icon={faEllipsisVertical}
                                />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
