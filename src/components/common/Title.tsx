import React from "react";

interface TitleProps {
    titleText: string;
}

const Title: React.FC<TitleProps> = ({ titleText }) => {
  return (
    <div className="title flex items-center">
        <div className="dots-shape"></div>
        <h3>{titleText}</h3>
    </div>
  )
}

export default Title