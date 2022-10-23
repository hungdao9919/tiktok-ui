import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import {
    faCamera,
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import Button from '~/Components/Button';
import { MessageIcon } from '~/Components/Icons';
import Image from '~/Components/Image';
import Menu from '~/Components/Popper/Menu';
import styles from './Header.module.scss';
import Search from '~/Components/Layout/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        data: [
                            {
                                code: 'vin',
                                title: 'Tiếng Việt Nam',
                            },
                            {
                                code: 'vib',
                                title: 'Tiếng Việt Bắc',
                                children: {
                                    data: [
                                        {
                                            code: 'vin',
                                            title: 'Tiếng Việt Nam',
                                        },
                                        {
                                            code: 'vib',
                                            title: 'Tiếng Việt Bắc',
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback & Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;

    const handleOnchangeMenu = (menuItem) => {
        console.log(menuItem);
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoa',
        },
        {
            icon: <FontAwesomeIcon icon={faCamera} />,
            title: 'LIVE Studio',
            to: '/upload',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/upload',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/upload',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"></img>
                </div>
                {/* {Search bar} */}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text to="/upload">
                                Upload
                            </Button>
                            <Tippy content="Upload videos" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text to="/upload">
                                Upload
                            </Button>

                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleOnchangeMenu}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/587e36217ad942a8de6c88163441e37a~c5_100x100.jpeg?x-expires=1666281600&x-signature=BnfqPHMHjvu%2FFT71aDqOdR05xjo%3D"
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
