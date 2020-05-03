import React from "react";

const MdLink: React.FC<React.ComponentPropsWithoutRef<"a">> = ({ href, target, children, rel, ...props }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export default MdLink;
