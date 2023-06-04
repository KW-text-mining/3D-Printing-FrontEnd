import { useState, useEffect, useRef } from 'react';
// sections
import ProgressLinearOne from '../../sections/_examples/mui/progress/ProgressLinearOne'
import { Block } from '../../sections/_examples/Block';

// ----------------------------------------------------------------------

export default function Progressbar() {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const progressRef = useRef(() => {});

  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Block title="Loading">
        <ProgressLinearOne progress={progress} buffer={buffer} />
      </Block>
    </>
  );
}
