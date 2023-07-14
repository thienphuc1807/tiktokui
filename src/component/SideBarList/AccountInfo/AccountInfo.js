import classNames from "classnames/bind";
import styles from "./AccountInfo.module.scss";
import Button from "~/component/Button";
import images from "~/assets/image";
const cx = classNames.bind(styles);
function AccountInfo() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("top-info")}>
                <img
                    src={images.userimages}
                    alt="CiKey"
                    className={cx("user-avatar")}
                />
                <Button primary className={cx("follow-btn")}>
                    Follow
                </Button>
            </div>
            <div className={cx("body-info")}>
                <h2 className={cx("nickname")}>cikeyyy187</h2>
                <p className={cx("username")}>Thiên phúc</p>
            </div>
            <div className={cx("bottom-info")}>
                <p className={cx("analyst")}>3.2M</p>
                <p className={cx("label")}>Follower</p>
                <p className={cx("analyst")}>3.2M</p>
                <p className={cx("label")}>Thích</p>
            </div>
        </div>
    );
}

export default AccountInfo;
