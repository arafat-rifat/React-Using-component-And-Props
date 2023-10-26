// import logo from './logo.svg';
import "./App.css";
import Header from "./Component/Header";
import Item from "./Component/Item";
import Time from "./Component/Time";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="Container px-10 py-10 bg-yellow-100">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <Menu />
      <div className="grid grid-col-1 lg:grid-cols-2 gap-8 mt-7 justify-center">
        <Item
          name="Contadina"
          ingri="Tomato sauce, Mozzarella, Eggplants, Artichokes, Garlic, Basil"
          img="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600"
          price="100"
        />
        <Item
          name="Con cozze"
          ingri="Tommato, Onnion , Garlic, Chesse"
          img="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600"
          price="300"
        />
        <Item
          name="Diavola"
          ingri="Tomato sauce, Mozzarella, Hot Italian salami, Hot chili peppers"
          img="https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&w=600"
          price="780"
        />
        <Item
          name="Etna"
          ingri="Tommato, Onnion , Garlic, Chesse"
          img="https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=600"
          price="1200"
        />
      </div>
      <Time />
      <div className="grid grid-col-1 lg:grid-cols-2 gap-8 mt-7 justify-center">
        <Item
          name="Marinara"
          ingri="Tommato, Onnion , Garlic, Chesse"
          img="https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&w=600"
          price="1700"
        />
        <Item
          name="Margherita"
          ingri="Marinara sauce, Garlic, Olive oil, Basil, Oregano"
          img="https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=600"
          price="1030"
        />
        <Item
          name="Pizza Spanis"
          ingri="Tommato, Onnion , Garlic, Chesse"
          img="https://images.pexels.com/photos/6072095/pexels-photo-6072095.jpeg?auto=compress&cs=tinysrgb&w=600"
          price="500"
        />
        <Item
          name="Pizza Spanis"
          ingri="San Marzano tomato sauce, Mozzarella di bufala, Olive Oil"
          img="https://images.pexels.com/photos/10836977/pexels-photo-10836977.jpeg?auto=compress&cs=tinysrgb&w=600"
          price="250"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
