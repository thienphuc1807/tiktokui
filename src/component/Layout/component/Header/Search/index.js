import TippyHeadless from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/component/Propper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import AccountItems from "~/component/AccountItems";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useRef, useState, useEffect } from "react";
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                searchValue
            )}&type=less`
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    const handleClear = () => {
        setSearchResult([]);
        setSearchValue("");
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <TippyHeadless
            interactive={true}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx("search-results")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx("search-title")}>Tài khoản</h4>
                        {searchResult.map((result) => (
                            <AccountItems key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx("search")}>
                <input
                    value={searchValue}
                    placeholder="Tìm kiếm"
                    ref={inputRef}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx("clear-btn")} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon
                        className={cx("loading")}
                        icon={faSpinner}
                    />
                )}
                <button className={cx("search-btn")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;