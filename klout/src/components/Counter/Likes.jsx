import React from 'react';
import CountUp from 'react-countup';

function Likes() {
  return (
    <div>
      <CountUp start={0} end={1000} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
    </div>
  );
}

export default Likes;