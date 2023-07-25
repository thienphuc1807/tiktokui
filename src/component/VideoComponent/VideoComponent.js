import images from "~/assets/image";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faCommentDots,
    faHeart,
    faMusic,
    faShare,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/component/Button";
import videos from "~/assets/videos";
import styles from "./VideoComponent.module.scss";
const cx = classNames.bind(styles);

function VideoComponent() {
    return (
        <div className={cx("container")}>
            <a href="/" className={cx("user-avatar")}>
                <img src={images.userimages} alt="user" />
            </a>
            <div className={cx("content-container")}>
                <div className={cx("author-container")}>
                    <h3 className={cx("author-nickname")}>cikeyyy187</h3>
                    <h4 className={cx("author-name")}>Thiên Phúc</h4>
                </div>
                <Button outline className={cx("follow-btn")}>
                    Follow
                </Button>
                <div className={cx("video-description")}>
                    <span className={cx("description")}>
                        Hello xin chào mọi người
                    </span>
                    <a href="/" className={cx("des-link")}>
                        <span>#facts</span>
                    </a>
                    <a href="/" className={cx("des-link")}>
                        <span>#knowledge</span>
                    </a>
                    <a href="/" className={cx("des-link")}>
                        <span>#curiosity</span>
                    </a>
                    <a href="/" className={cx("des-link")}>
                        <span>#music</span>
                    </a>
                </div>
                <div className={cx("music-tag")}>
                    <h4 className={cx("music-link")}>
                        <FontAwesomeIcon icon={faMusic} />
                        <a href="/" className={cx("music-text")}>
                            <span>
                                Solitude ( Felsmann + Tiley Reinterpretation) -
                                Slowed Down - M83 & Felsmann + Tiley
                            </span>
                        </a>
                    </h4>
                </div>
                <div className={cx("video-wrapper")}>
                    <div className={cx("video-container")}>
                        <video controls className={cx("video")}>
                            <source src={videos.video1} type="video/mp4" />
                            Trình duyệt của bạn không hỗ trợ video
                        </video>
                    </div>
                    <div className={cx("video-actions")}>
                        <button className={cx("actions-btn")}>
                            <span className={cx("action-icon")}>
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <span className={cx("data")}>1.9M</span>
                        </button>
                        <button className={cx("actions-btn")}>
                            <span className={cx("action-icon")}>
                                <FontAwesomeIcon icon={faCommentDots} />
                            </span>
                            <span className={cx("data")}>2590</span>
                        </button>
                        <button className={cx("actions-btn")}>
                            <span className={cx("action-icon")}>
                                <FontAwesomeIcon icon={faBookmark} />
                            </span>
                            <span className={cx("data")}>47.6K</span>
                        </button>
                        <button className={cx("actions-btn")}>
                            <span className={cx("action-icon")}>
                                <FontAwesomeIcon icon={faShare} />
                            </span>
                            <span className={cx("data")}>1.9 M</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoComponent;
