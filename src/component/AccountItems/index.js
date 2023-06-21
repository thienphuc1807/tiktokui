import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItems.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/dddda1f919f62b7ed22fec5e6be9c449~c5_100x100.jpeg?x-expires=1687482000&x-signature=z9%2BfxWkqb77354BNayBpmheucN8%3D"
                alt="ThienPhuc"
            />
            <div className={cx("info")}>
                <p className={cx("username")}>
                    <span>cikey1807</span>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx("circle")}
                    />
                </p>
                <span className={cx("name")}>Thiên Phúc</span>
            </div>
        </div>
    );
}

export default AccountItems;
