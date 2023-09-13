import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success  rounded outline>Click me </Button>
      </div>
      <div>
        <Button danger outline>Buy now</Button>
      </div>
      <div>
        <Button danger>Delete</Button>
      </div>
      <div>
        <Button warning > See deal</Button>
      </div>
      <div>
        <Button secondary rounded> Hide ads</Button>
      </div>
    </div>
  );
}

export default App;
