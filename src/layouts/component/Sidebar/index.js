import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Menu, { MenuItems } from "./Menu";
import config from "~/config";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/component/Propper";

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
import SideBarList from "~/component/SideBarList";
import Button from "~/component/Button";
const cx = classNames.bind(styles);
const currentUser = false;
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
            {currentUser ? (
                <SideBarList title="Các tài khoản đang follow" />
            ) : (
                <SideBarList title="Đăng nhập để follow các tác giả, thích video và xem bình luận." />
            )}
            <div className={cx("footer-sidebar")}>
                <div className={cx("link-group")}>
                    <Button className={cx("link")}>Giới thiệu</Button>
                    <Button className={cx("link")} to={"/news"} target="_blank">
                        Bảng tin
                    </Button>
                    <Button
                        className={cx("link")}
                        href={"/contact"}
                        target="_blank"
                    >
                        Liên hệ
                    </Button>
                    <Button
                        className={cx("link")}
                        href={"https://careers.tiktok.com"}
                        target="_blank"
                    >
                        Sự nghiệp
                    </Button>
                    <Button className={cx("link")} to={"/bytedance"}>
                        ByteDance
                    </Button>
                </div>
                <div className={cx("link-group")}>
                    <Button className={cx("link")}>TikTok for Good</Button>
                    <Button className={cx("link")} to={"/news"} target="_blank">
                        Quảng cáo
                    </Button>
                    <Button
                        className={cx("link")}
                        href={"/contact"}
                        target="_blank"
                    >
                        Developers
                    </Button>
                    <Button
                        className={cx("link")}
                        href={"https://careers.tiktok.com"}
                        target="_blank"
                    >
                        Minh bạch
                    </Button>
                    <Button className={cx("link")} to={"/bytedance"}>
                        TikTok Rewards
                    </Button>
                    <Button className={cx("link")} to={"/bytedance"}>
                        TikTok Embeds
                    </Button>
                </div>
                <div className={cx("link-group")}>
                    <Button className={cx("link")}>Giới thiệu</Button>
                    <Button className={cx("link")} to={"/news"} target="_blank">
                        Trợ giúp
                    </Button>
                    <Button
                        className={cx("link")}
                        href={"/contact"}
                        target="_blank"
                    >
                        An toàn
                    </Button>
                    <Button
                        className={cx("link")}
                        href={"https://careers.tiktok.com"}
                        target="_blank"
                    >
                        Điều khoản
                    </Button>
                    <Button className={cx("link")} to={"/bytedance"}>
                        Quyền riêng tư
                    </Button>
                    <Button className={cx("link")} to={"/bytedance"}>
                        Cổng thông tin Tác giả
                    </Button>
                    <Button className={cx("link")} to={"/bytedance"}>
                        Hướng dẫn Cộng đồng
                    </Button>
                </div>
                <div className={cx("link-group")}>
                    <Tippy
                        placement="top"
                        interactive={true}
                        offset={[85, 5]}
                        render={() => (
                            <PopperWrapper className={cx("more-wrapper")}>
                                <Button
                                    className={cx("more-link")}
                                    to={
                                        "https://www.tiktok.com/legal/page/global/law-enforcement/vi-VN"
                                    }
                                    target="_blank"
                                >
                                    NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                                </Button>
                            </PopperWrapper>
                        )}
                    >
                        <p className={cx("link")}>Thêm</p>
                    </Tippy>
                </div>
                <div className={cx("link-group")}>
                    <p className={cx("link")}>©ThienPhucDev</p>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
