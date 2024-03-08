import React from "react";
import "./Layout.css";

type Props = {
  children: React.ReactNode[];
};

export default function Layout({ children }: Props) {
  return (
    <div className="layout">
      {children.map((child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      ))}
    </div>
  );
}
