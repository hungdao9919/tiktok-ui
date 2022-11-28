import PropTypes from 'prop-types';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Sidebar from './SideBar';
const cx = classNames.bind(styles);

function Defaultlayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
Defaultlayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Defaultlayout;
