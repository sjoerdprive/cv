interface IJobProps {
  title: string;
  employer: string;
  period: string;
  children: React.ReactNode;
}

export default function Job({ title, employer, period, children }: IJobProps) {
  return (
    <div>
      <div className="mb-2">
        <h3 className="mb-0 fixed">
          <span className="primary">{title} </span>
          bij {employer}
        </h3>
        <small>{period}</small>
      </div>
      {children}
    </div>
  );
}
