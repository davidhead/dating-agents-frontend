import { useEffect, useRef, useState } from "react";

const LoadingBar = ({ duration_seconds, message }) => {
  const [progress, setProgress] = useState(4);
  const progressRef = useRef<HTMLDivElement>(null);

  const duration = duration_seconds * 10;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return newProgress;
      });
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  return (
    <div className="relative mb-12 mt-12 h-8 w-full rounded-full bg-white px-3 py-3 shadow-lg">
      <div
        className="transition-width delay-50 absolute top-0 left-0 h-full w-full rounded-full bg-gray-200 ease-in-out"
        ref={progressRef}
      />
      <div className="relative flex h-full items-center justify-center px-4 text-sm font-semibold text-gray-500">
        {`${message} - ${progress}%`}
      </div>
    </div>
  );
};

export default LoadingBar;
