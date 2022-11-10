import './index.scss';

const AnimatedLetters = (props:Props) => {
  const {idx, text, letterClass} = props;
  const strArray = text.split('');
  return(
    <span>
      {
        strArray.map((char, i) => (
          <span key={char+i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))
      }
    </span>
  );
}

export default AnimatedLetters;

interface Props{
  letterClass? : string;
  text : string;
  idx: number;
}