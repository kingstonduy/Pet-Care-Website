import React, { useEffect, useState } from "react";
import cs from "./SearchBar.module.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

export function SearchBar({ setData, originalData, wordEntered, setWordEntered }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    if (originalData.length > 0) {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = originalData.filter((value) => {
        return value.orderedProductDTOProductName.toLowerCase().includes(searchWord.toLowerCase());
      });
      if (searchWord === "") {
        setFilteredData([]);
        setData(originalData);
        setFilteredData(originalData);
      } else {
        setFilteredData(newFilter);
        setData(newFilter);
      }
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setData(originalData);
    setWordEntered("");
  };

  useEffect(() => {
    if (wordEntered === "") {
      setFilteredData([]);
      setData(originalData.slice(0, 3));
    }
  }, [wordEntered]);

  return (
    <div className={cs["search"]}>
      <div className={cs["searchInputs"]}>
        <input
          type="text"
          placeholder={'Enter the name of book'}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className={cs["searchIconDiv"]}>
          <div className={cs["searchIcon"]}>
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className={cs["dataResult"]}>
            {
                filteredData.slice(0, 15).map((value, key) => ( 
                    <Link
                        to={`/Product/Detail/${value.productId}`}
                        className={cs["dataItem"]}
                        key={key}
                    >
                    {value.orderedProductDTOProductName.length <= 200
                        ? value.orderedProductDTOProductName
                        : `${value.orderedProductDTOProductName.slice(0, 100)}...`}
                    </Link>
                ))
            }
        </div>
      )}
    </div>
  );
}
