function Main({data, modalVisibility, getData}) {
  let count = 0;

  const trClick = event => {
    modalVisibility();
    getData(event.target.textContent);
  };

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
            return <tr key={element.Country} onClick={trClick}>
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
