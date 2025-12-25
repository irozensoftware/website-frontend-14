import React from "react";

const DescriptionContent = ({description}) => {
  return (
    <div  className="sm" dangerouslySetInnerHTML={{__html:description}}>
      
    </div>
  );
};

export default DescriptionContent;
