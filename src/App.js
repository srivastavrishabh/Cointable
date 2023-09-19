import { useEffect, useState } from "react";
import { getTokenList } from "./services/coinMarket";
import Table from "./Table";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAllToken = async () => {
      const response = await getTokenList();
      if (response) {
        setData(response.data);
      }
    };
    fetchAllToken();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Table data={data.slice(0, 10)} colToShow={["name", "symbol"]} />
    </div>
  );
}
