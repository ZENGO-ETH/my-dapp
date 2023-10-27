import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function App(){
 
  return (
  <CountdownCircleTimer
    isPlaying
    duration={5}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 2, 1, 0]}
    size={80}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
 );
}
