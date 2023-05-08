import React from "react"
import SearchBar from "../SearchBar/SearchBar"

export default function Nav({onSearch}){

    return (
        <div>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}