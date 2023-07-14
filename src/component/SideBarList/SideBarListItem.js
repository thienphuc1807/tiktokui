import images from "~/assets/image";
import classNames from "classnames/bind";
import styles from "./SideBarList.module.scss";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PropperWrapper } from "~/component/Propper";
import AccountInfo from "./AccountInfo/AccountInfo";

const cx = classNames.bind(styles);
function SideBarListItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PropperWrapper>
                    <AccountInfo />
                </PropperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                render={renderPreview}
                placement="bottom"
                offset={[0 , -5]}
            >
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
            </Tippy>
        </div>
    );
}

export default SideBarListItem;
