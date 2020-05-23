import React from 'react';
import classnames from 'classnames';

interface BaseAlertProps {
  type?: string,
  title?: string,
  message?: string,
  className?: string,
  closeable?: boolean,
  onCancle?: () => void
};

const Alert: React.FC<BaseAlertProps> = (props) => {
  const {
    type,
    title,
    message,
    className,
    closeable,
    onCancle
  } = props;
  const classes = classnames('bk-alert', className, {
    [`bk-alert-${type}`]: type
  })
  return (
    <div
      className={classes}
    >
      {title && <span className="bk-alert-title">{title}</span>}
      {message && <span className="bk-alert-message">{message}</span>}
      {closeable && <span className="bk-alert-close" onClick={onCancle}>关闭</span>}
    </div>
  )
}

export default Alert