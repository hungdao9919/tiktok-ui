import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './SuggestedAccounts.module.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';
import config from '~/configs';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div>
            <Tippy
                // visible={true}
                interactive={true}
                delay={[800, 200]}
                offset={[-8, 2]}
                placement="bottom-start"
                render={(attrs) => (
                    <div className={cx('profile-details')}>
                        <div className={cx('profile-header')}>
                            <img
                                alt=""
                                className={cx('profile-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1669910400&x-signature=cdOWV09G7pG8b6nomeiRQW5HfKY%3D"
                            />
                            <Button className={cx('profile-follow-btn')} primary>
                                Follow
                            </Button>
                        </div>
                        <div className={cx('profile-name-wrapper')}>
                            <Link className={cx('profile-nickname')} to={config.routes.profile}>
                                hungdao9919
                                <FontAwesomeIcon className={cx('profile-check-icon')} icon={faCheckCircle} />
                            </Link>
                            <Link className={cx('profile-displayname')} to={config.routes.profile}>
                                Quang Hùng
                            </Link>
                        </div>
                        <div className={cx('profile-statistics')}>
                            <span className={cx('profile-follower-quantity')}>7.2M</span>
                            <span className={cx('profile-follower-label')}>Followers</span>
                            <span className={cx('profile-like-quantity')}>244.7M</span>
                            <span className={cx('profile-like-label')}>Likes</span>
                        </div>
                    </div>
                )}
            >
                <div className={cx('account-item')}>
                    <img
                        alt=""
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1669910400&x-signature=cdOWV09G7pG8b6nomeiRQW5HfKY%3D"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>hungdao9919 </strong>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Quang Hùng</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
