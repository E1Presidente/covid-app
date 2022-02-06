function Main({ data, modal, input, setData }) {
  const search = data.filter(element => {
      return element.Country.toLowerCase().startsWith(input.toLowerCase());
    }
  );

  const sortData = event => {
    const tempData = [...data];

    const newData = tempData.sort((a, b) => {
      if (a[event.target.parentNode.id] < b[event.target.parentNode.id]) {
        if (event.target.id === "ascending") {
          return -1;
        } else {
          return 1;
        }
      }
      if (a[event.target.parentNode.id] > b[event.target.parentNode.id]) {
        if (event.target.id === "ascending") {
          return 1;
        } else {
          return -1;
        }
      }
      return 0;
    })
    setData(newData);
  }

  return (
    <div className="Main">
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>
              <div id="Country" className="thead-content">
                <p>Country</p>
                <span id="ascending" onClick={sortData}>&#9650;</span>
                <span id="descending" onClick={sortData}>&#9660;</span>
              </div>
            </th>
            <th>
              <div id="TotalConfirmed" className="thead-content">
                <p>Total Confirmed</p>
                <span id="ascending" onClick={sortData}>&#9650;</span>
                <span id="descending" onClick={sortData}>&#9660;</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {search.map((element, index) => {
            return <tr id={element.Country} key={element.Country} onClick={event => modal.modalSetup(event.target.parentNode.id)}>
              <th>{++index}</th>
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
