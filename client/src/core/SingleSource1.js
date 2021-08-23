import React from 'react';
import Image from 'react-image-enlarger'

const SingleSource1 = ({ src }) => {
  const [zoomed, setZoomed] = React.useState(false);

  return (
    <div style={{ margin: "0.55rem" }}>
      <Image
        style={{ width: "400px", height: "200px" }}
        zoomed={zoomed}
        src={src}
        onClick={() => setZoomed(true)}
        onRequestClose={() => setZoomed(false)}
        onError={(event) => (event.target.style.display = "none")}
        // onError={(e) => {
        //   e.target.src = { Pic };
        // }}
      />
    </div>
  );
};

export default SingleSource1;
