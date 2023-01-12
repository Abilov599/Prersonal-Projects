import React, { useEffect, useState } from "react";
import { Spin, Table } from "antd";
import { Input } from "antd";
const { Search } = Input;
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/slice/getData.js";

function App() {
  const universityData = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(""));
  }, []);

  const handleSearch = (value) => {
    dispatch(fetchData(value));
  };

  const [value, setValue] = useState("");

  const columns = [
    {
      title: "University Name",
      dataIndex: "name",
    },
    {
      title: "Country",
      dataIndex: "country",
    },
    {
      title: "Domains",
      dataIndex: "domains",
    },
    {
      title: "Website",
      dataIndex: "web_pages",
      render: (element) => (
        <a target="_blank" href={`${element}`}>
          {element}
        </a>
      ),
    },
  ];

  return (
    <main className="App">
      <h1>Search University By Name</h1>
      <Search
        onChange={(e) => setValue(e.target.value)}
        onSearch={() => handleSearch(value)}
        placeholder="Search University"
        loading={universityData.loading}
        enterButton
      />
      <br />
      <br />
      {universityData.loading ? (
        <>
          <br />
          <br />
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>
        </>
      ) : (
        <Table
          columns={columns}
          dataSource={universityData.data}
          rowKey="domains"
        />
      )}
    </main>
  );
}

export default App;
