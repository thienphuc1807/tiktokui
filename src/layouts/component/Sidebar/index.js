import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Menu, { MenuItems } from "./Menu";
import config from "~/config";
import {
    HomeIcon,
    ExploreIcon,
    LiveIcon,
    UserGroupIcon,
    HomeIconActive,
    UserGroupIconActive,
    ExploreIconActive,
    LiveIconActive,
} from "~/component/Icon";
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItems
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                    title="Dành cho bạn"
                />
                <MenuItems
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                    title="Đang Follow"
                />
                <MenuItems
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreIconActive />}
                    title="Khám phá"
                />
                <MenuItems
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveIconActive />}
                    title="LIVE"
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
