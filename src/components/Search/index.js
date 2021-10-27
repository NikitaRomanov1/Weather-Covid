import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Button, Input } from "../../styles/styles";
import { useActions } from "../../hooks/useActions";
const Search = () => {
  const [value, setValue] = useState("");
  const { fetchWeather } = useActions();
  return (
    <div style={{ position: "relative" }}>
      <Input
        placeholder="Введите город"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></Input>
      <Button onClick={() => fetchWeather(value)}>
        <BsSearch />
      </Button>
    </div>
  );
};

export default Search;
