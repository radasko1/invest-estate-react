import React from "react";
import "./Content.css";

type Props = {
  children: React.ReactNode[];
};

export default function Content({ children }: Props) {
  return (
    <div className="main-content">
      {children.map((child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      ))}
    </div>
  );
}
