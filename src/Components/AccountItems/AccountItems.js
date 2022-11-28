import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from '~/Components/AccountItems/AccountItems.module.scss';
import Image from '~/Components/Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    {data.full_name}
                    {data.tick && (
                        <span>
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                    )}
                </p>
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
