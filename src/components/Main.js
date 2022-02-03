import {useState, useEffect} from 'react'; 
import {request} from './tools/request';

function Main() {
  let count = 0;
  const [data, setData] = useState([]);

  useEffect(() => {
    request()
      .then(data => setData(data.Countries))
  }, []);

  console.log("Main render");

  return (
    <div className="Main">
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Country</th>
            <th>Total Confirmed</th>
          </tr>
        </thead>
        <tbody>
          {data.map(element => {
            count++;
            return <tr key={element.Country}>
              <th>{count}</th>
              <th>{element.Country}</th>
              <th>{element.TotalConfirmed}</th>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Main;
