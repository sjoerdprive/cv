interface IIconTextProps {
  start?: React.ReactNode;
  end?: React.ReactNode;
  children: React.ReactNode;
}

export default function IconText({ start, end, children }: IIconTextProps) {
  return (
    <span className="icontext">
      {start && <span className="start-icon"> {start} </span>}
      <span className="label">{children}</span>
      {end && <span className="end-icon">{end}</span>}
    </span>
  );
}
