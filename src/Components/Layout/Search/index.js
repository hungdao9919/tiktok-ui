import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hooks';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/Components/AccountItems';
import { Wrapper as Wrapperpopper } from '~/Components/Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, SetSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounced = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResults([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResults(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounced]);
    const handleHideResults = () => {
        setShowResult(false);
    };
    return (
        <HeadlessTippy
            placement="bottom"
            interactive={true}
            visible={showResult && searchResults.length > 0}
            onClickOutside={handleHideResults}
            render={(attrs) => (
                <div className={cx('search-results')}>
                    <Wrapperpopper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResults.map((searchResult) => {
                            return <AccountItem key={searchResult.id} data={searchResult} />;
                        })}
                    </Wrapperpopper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    type="text"
                    spellCheck="false"
                    onFocus={() => setShowResult(true)}
                    onChange={(e) => {
                        SetSearchValue(e.target.value);
                    }}
                ></input>
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            SetSearchValue('');
                            inputRef.current.focus();
                            setSearchResults([]);
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && (
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}
export default Search;
