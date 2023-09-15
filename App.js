import { GoBell, GoDatabase ,GoBookmarkFill,GoClockFill,GoHome } from 'react-icons/go';
import Button from './Button';

function App() {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div>
      <div>
        <Button secondary outline rounded onClick={handleClick} 
          className="mb-5"
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
       <GoBookmarkFill />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoClockFill />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoHome />
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
