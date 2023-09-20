import { useEffect, useState } from "react";
import { getTokenList } from "./services/coinMarket";
import Table from "./Table";
import Input from "./Input";

export default function App() {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const fetchAllToken = async () => {
      const response = await getTokenList();
      if (response) {
        setAllData(response.data);
        setData(response.data);
      }
    };
    fetchAllToken();
  }, []);

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  useEffect(() => {
    const lowerCaseSearchKey = searchKey.toLowerCase();

    const result = allData.filter(
      ({ name, symbol }) =>
        name.toLowerCase().includes(lowerCaseSearchKey) ||
        symbol.includes(lowerCaseSearchKey.toUpperCase())
    );
    setData(result);
  }, [searchKey]);

  return (
    <div className="container ">
      <h1 className="pt-4">Crypto Currency With Symbol</h1>
      <div className="py-3 d-flex justify-content-end">
        <div class="d-flex">
          <Input
            onChange={handleChange}
            value={searchKey}
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
      <Table data={data.slice(0, 20)} colToShow={["slug", "symbol", "name"]} />
    </div>
  );
}
