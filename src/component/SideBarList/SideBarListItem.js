import images from "~/assets/image";
import classNames from "classnames/bind";
import styles from "./SideBarList.module.scss";
const cx = classNames.bind(styles);
function SideBarListItem() {
    return (
        <div className={cx("item")}>
            <img
                className={cx("user-avatar")}
                src={images.userimages}
                alt="ThienPhuc"
            />
            <div className={cx("user-info")}>
                <h2 className={cx("user-nickname")}>cikeyyy187</h2>
                <p className={cx("username")}>Thiên Phúc</p>
            </div>
        </div>
    );
}

export default SideBarListItem;
