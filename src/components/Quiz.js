import QuestionData from '../data/QuestionsData';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../App';

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selectChoice, setSelectChoice] = useState('');
  const { score, setScore, setAppState } = useContext(DataContext);

  const nextQuestion = () => {
    setSelectChoice('');
    if (current === QuestionData.length - 1) {
      setAppState('score');
    } else setCurrent(current + 1);
  };

  useEffect(() => {
    checkAnswer();
    // eslint-disable-next-line
  }, [selectChoice]);

  const checkAnswer = () => {
    if (selectChoice !== '') {
      if (selectChoice === QuestionData[current].answer) {
        console.log('ตอบถูก');
        setScore(score + 1);
        nextQuestion();
      } else {
        console.log('ตอบผิด');
        nextQuestion();
      }
    }
  };

  return (
    <div className="quiz">
      <h1>{QuestionData[current].question}</h1>
      <div className="choise">
        <button onClick={() => setSelectChoice('A')}>
          {QuestionData[current].A}
        </button>
        <button onClick={() => setSelectChoice('B')}>
          {QuestionData[current].B}
        </button>
        <button onClick={() => setSelectChoice('C')}>
          {QuestionData[current].C}
        </button>
        <button onClick={() => setSelectChoice('D')}>
          {QuestionData[current].D}
        </button>
      </div>
      <p>{`${current + 1} / ${QuestionData.length}`}</p>
    </div>
  );
};
export default Quiz;
