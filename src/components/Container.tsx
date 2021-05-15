import '../styles/container.scss';

interface IContainerProps {
  children: React.ReactNode;
}

export function Container(props: IContainerProps) {
  const { children } = props;
  return <div className='container-root'>{children}</div>;
}
