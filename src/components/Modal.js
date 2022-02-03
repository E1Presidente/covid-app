import Heartbeat from './img/heartbeat.png';
import Skull from './img/skull.png';
import Medical from './img/medical.png';

function Modal({modal, modalVisibility, modalData}) {
  console.log("Modal render");

  return (
    <div className="Modal" hidden={modal} >
      <div className="modal-body">
        <h1>{modalData.Country}</h1>
        <table>
          <tbody>
            <tr>
              <th><img src={Heartbeat} alt="Heartbeat" /></th>
              <th>Total Confirmed</th>
              <th>{modalData.TotalConfirmed}</th>
            </tr>
            <tr>
              <th><img src={Skull} alt="Skull" /></th>
              <th>Total Deaths</th>
              <th>{modalData.TotalDeaths}</th>
            </tr>
            <tr>
              <th><img src={Medical} alt="Medical" /></th>
              <th>Total Recovered</th>
              <th>{modalData.TotalRecovered}</th>
            </tr>
          </tbody>
        </table>
        <div className="modal-button">
          <button onClick={modalVisibility}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
