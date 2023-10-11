import useCounter from '../Hooks/useCounter';
import Button from '../components/Button';





function Counterpage({ initialCount }) {
  const {count,increment} =useCounter(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default Counterpage;
