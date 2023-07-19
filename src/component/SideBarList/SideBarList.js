import classNames from "classnames/bind";
import styles from "./SideBarList.module.scss";
import { SideBarListItem } from ".";
import PropTypes from "prop-types";
import Button from "../Button";
const cx = classNames.bind(styles);
const currentUser = false;
function SideBarList({ title }) {
    return (
        <div className={cx("wrapper")}>
            <h2 className={cx("title")}>{title}</h2>
            {currentUser ? (
                <>
                    <SideBarListItem />
                    <SideBarListItem />
                    <SideBarListItem />
                    <SideBarListItem />
                    <p className={cx("see-all-btn")}>Xem thêm</p>
                </>
            ) : (
                <div className={cx("login")}>
                    <Button outline className={cx("login-btn")}>
                        Đăng nhập
                    </Button>
                </div>
            )}
        </div>
    );
}

SideBarList.propTypes = {
    title: PropTypes.string,
};

export default SideBarList;
