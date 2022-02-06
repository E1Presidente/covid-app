import Heartbeat from './img/heartbeat.png';
import Skull from './img/skull.png';
import Medical from './img/medical.png';

function Modal({ modal }) {
  return (
    <div className="Modal" hidden={modal.modalVisibility} >
      <div className="modal-body">
        <h1>{modal.modalData.Country}</h1>
        <table>
          <tbody>
            <tr>
              <th><img src={Heartbeat} alt="Heartbeat" /></th>
              <th>Total Confirmed</th>
              <th>{modal.modalData.TotalConfirmed}</th>
            </tr>
            <tr>
              <th><img src={Skull} alt="Skull" /></th>
              <th>Total Deaths</th>
              <th>{modal.modalData.TotalDeaths}</th>
            </tr>
            <tr>
              <th><img src={Medical} alt="Medical" /></th>
              <th>Total Recovered</th>
              <th>{modal.modalData.TotalRecovered}</th>
            </tr>
          </tbody>
        </table>
        <div className="modal-footer">
          <button type="button" onClick={() => modal.modalSetup()}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
