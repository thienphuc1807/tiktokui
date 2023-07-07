import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/component/Propper";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItems from "./MenuItems";
import Header from "./Header";
import { useState } from "react";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);
function Menu({ children, items = [], hideOnClick = false, onChange }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleOutOfHoverMenu = () => {
        setHistory([history[0]]);
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-popper")}>
                {history.length > 1 && (
                    <Header title={current.title} onBack={handleBack} />
                )}
                <div className={cx("menu-body")}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            onHide={handleOutOfHoverMenu}
            interactive={true}
            hideOnClick={hideOnClick}
            // visible
            offset={[12, 8]}
            delay={[0, 500]}
            placement="bottom-end"
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
