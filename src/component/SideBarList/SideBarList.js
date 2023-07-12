import classNames from "classnames/bind";
import styles from "./SideBarList.module.scss";
import { SideBarListItem } from ".";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

function SideBarList({ title }) {
    return (
        <div className={cx("wrapper")}>
            <h2 className={cx("title")}>{title}</h2>
            <SideBarListItem />
            <SideBarListItem />
            <SideBarListItem />
            <SideBarListItem />
            <p className={cx("see-all-btn")}>Xem thêm</p>
        </div>
    );
}

SideBarList.propTypes = {
    title: PropTypes.string,
};

export default SideBarList;
