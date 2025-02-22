import css from './Alert.module.css';
import clsx from 'clsx';

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(
        css[variant],
        outlined && css.isOutlined,
        elevated && css.isElevated
      )}
    >
      {children}
    </p>
  );
};
