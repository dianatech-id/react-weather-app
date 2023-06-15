import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <p>
            Coded by Diana M. {""}
            <a
              className="Git-link"
              href="https://github.com/dianatech-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Source
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
