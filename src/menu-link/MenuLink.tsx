import "./MenuLink.css";

type Props = {
  title: string;
};

export default function MenuLink({ title }: Props) {
  return (
    <li className="menu-item">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="menu-link">
        {title}
      </a>
    </li>
  );
}
