import CardContainer from "./components/Card Container";
import Footer from "./components/Footer";
import Form from "./components/Form";
import InputTypes from "./components/InputTypes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-green-600 overflow-x-hidden">
      <Navbar/>

      <CardContainer/>
      <Form/>
      <InputTypes/>
      <Footer/>
    </div>
  );
}

export default App;
