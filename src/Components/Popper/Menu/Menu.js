import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

import { Wrapper as Wrapperpopper } from '~/Components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentMenu = history[history.length - 1];
    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handlePrevious = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    return (
        <Tippy
            interactive={true}
            hideOnClick={hideOnClick}
            delay={[0, 500]}
            offset={[12, 8]}
            placement="bottom-end"
            onHidden={handlePrevious}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <Wrapperpopper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={currentMenu.title} onBack={handleBack} />}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </Wrapperpopper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};
export default Menu;
