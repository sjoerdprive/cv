import classNames from 'classnames';

interface IIconTextProps {
  start?: React.ReactNode;
  end?: React.ReactNode;
  children: React.ReactNode;
  hideLabel?: boolean;
  smLabel?: boolean;
}

export default function IconText({
  start,
  end,
  children,
  hideLabel,
  smLabel,
}: IIconTextProps) {
  return (
    <span className="icontext">
      {start && <span className="start-icon"> {start} </span>}
      <span
        className={classNames(
          'label',
          hideLabel && 'sr-only',
          smLabel && 'sm-label'
        )}
      >
        {children}
      </span>
      {end && <span className="end-icon">{end}</span>}
    </span>
  );
}
