import { useState, useEffect } from 'react';
import { request } from './tools/request';
import Header from './Header';
import Main from './Main';
import Modal from './Modal';
import './css/App.css';

function App() {
  const [data, setData] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(true);
  const [modalData, setModalData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    request()
      .then(response => setData(response.Countries));
  }, []);

  const modalSetup = event => {
    if (event) {
      const filteredData = data.filter(element => {
        return element.Country === event;
      })
      setModalData(filteredData[0]);
      setModalVisibility(!modalVisibility);
    } else {
      setModalVisibility(!modalVisibility);
    }
  };

  return (
    <div className="App">
      <Header 
        search={setSearchValue} 
      />
      <Main 
        data={data} 
        modal={{setModalVisibility, modalSetup}}  
        input={searchValue} 
        setData={setData}
      />
      <Modal 
        modal={{modalVisibility, modalSetup, modalData}} 
      />
    </div>
  );
}

export default App;
