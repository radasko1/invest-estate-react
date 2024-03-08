import React from "react";
import "./Menu.css";

type Props = {
  children: React.ReactNode[];
};

export default function Menu({ children }: Props) {
  return (
    <ul className="menu">
      {children.map((child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      ))}
    </ul>
  );
}
