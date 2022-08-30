import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}



const App = () => {
  return (
    <div style={wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
