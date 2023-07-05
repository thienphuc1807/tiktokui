import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItems.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Images from "../Images";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);
function AccountItems({ data }) {
    return (
        <Link to={`/profile/@${data.nickname}`} className={cx("wrapper")}>
            <Images
                className={cx("avatar")}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx("info")}>
                <p className={cx("username")}>
                    <span>{data.nickname}</span>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx("circle")}
                    />
                </p>
                <span className={cx("name")}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountItems.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItems;
