import {useState, useEffect} from 'react';
import {request} from './tools/request';
import Header from './Header';
import Main from './Main';
import Modal from './Modal';
import './css/App.css';

function App() {
  console.log("App render");

  const [data, setData] = useState([]);
  const [modal, setModal] = useState(true);
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    request()
      .then(response => setData(response.Countries));
    console.log("App useEffect");
  }, []);

  const modalVisibility = () => {
    setModal(!modal);
  }

  const getData = (event) => {
    const dataModal = data.filter(element => {
      return element.Country === event;
    })
    setModalData(dataModal[0]);
  };
  
  return (
    <div className="App">
      <Header />
      <Main data={data} modalVisibility={modalVisibility} getData={getData} />
      <Modal modal={modal} modalVisibility={modalVisibility} modalData={modalData} />
    </div>
  );
}

export default App;
