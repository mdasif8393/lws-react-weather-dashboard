import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </>
  );
}

export default App;
