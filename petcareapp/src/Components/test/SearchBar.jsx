import React, { useEffect, useState } from "react";
import cs from "./SearchBar.module.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';



function SearchBar({ data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");


  

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data
        // .filter((value) => {
        //     return value.title.toLowerCase().includes(searchWord.toLowerCase());
        // });
        console.log(newFilter)
        if (searchWord === "") {
            setFilteredData([]);
        } 
        else {
            setFilteredData(newFilter);
        }
    };
  
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

  
    return (
        <div className={cs['container']}>
            <div className={cs["search"]}>
                <div className={cs["searchInputs"]}>
                <input
                    type="text"
                    placeholder={'Enter the name of book'}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className={cs["searchIcon"]}>
                    {filteredData.length === 0 ? (
                    <SearchIcon />
                    ) : (
                    <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>
                </div>
                {
                    
                    filteredData.length != 0 && (
                    <div className={cs["dataResult"]}>
                        {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a className={cs["dataItem"]} href={value.link} target="_blank">
                                <p>{value.title} </p>
                            </a>
                        );
                        })}
                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default SearchBar;