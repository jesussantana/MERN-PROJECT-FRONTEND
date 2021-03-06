import React from "react";
import CountUp from "react-countup";

function Rate() {
  return (
    <div>
      <CountUp start={0} end={4.88} delay={0} decimals={2}>
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />%
          </div>
        )}
      </CountUp>
    </div>
  );
}

export default Rate;
