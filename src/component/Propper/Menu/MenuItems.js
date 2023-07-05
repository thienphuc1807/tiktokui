import Button from "~/component/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
    return (
        <Button
            className={cx("menu-item", {
                separate: data.separate,
            })}
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItems;
