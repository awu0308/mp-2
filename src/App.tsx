import CocktailList from "./components/CocktailList.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Cocktail} from "./interfaces/Cocktails.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Cocktail[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m");
            const {drinks} : {drinks: Cocktail[]} = await rawData.json();
            setData(drinks);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);
    
    return(
        <ParentDiv>
            <CocktailList data={data}/>
        </ParentDiv>
    )
}
