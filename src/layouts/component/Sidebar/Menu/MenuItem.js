import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItems({ to, icon, title, activeIcon }) {
    return (
        <NavLink
            to={to}
            className={(nav) =>
                cx("menu-item", {
                    active: nav.isActive,
                })
            }
        >
            <span className={cx("icon")}>{icon}</span>
            <span className={cx("active-icon")}>{activeIcon}</span>
            <span className={cx("title")}>{title}</span>
        </NavLink>
    );
}

MenuItems.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default MenuItems;
