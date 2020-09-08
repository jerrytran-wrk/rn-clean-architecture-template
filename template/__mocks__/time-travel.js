// timeTravel.js
import MockDate from 'mockdate';

const FRAME_TIME = 10;

const advanceOneFrame = () => {
  const now = Date.now();
  MockDate.set(new Date(now + FRAME_TIME));
  jest.advanceTimersByTime(FRAME_TIME);
};

const timeTravel = (msToAdvance = FRAME_TIME) => {
  const numberOfFramesToRun = msToAdvance / FRAME_TIME;
  let framesElapsed = 0;

  // Step through each of the frames until we've ran them all
  while (framesElapsed < numberOfFramesToRun) {
    advanceOneFrame();
    framesElapsed++;
  }
};

export default timeTravel;
export const setupTimeTravel = () => {
  MockDate.set(0);
  jest.useFakeTimers();
};
