import styles from '~/Components/Button/Button.module.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    onClick,
    primary = false,
    text = false,
    outline = false,
    rounded = false,
    small = false,
    large = false,
    disabled = false,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        delete props.onClick;
    }
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    const classes = cx('wrapper', { primary, outline, rounded, small, large, text, [className]: className, disabled });
    return (
        <Component primary className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}
export default Button;
