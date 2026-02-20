import styled from "styled-components";
import type {Cocktail} from "../interfaces/Cocktails.ts";

const AllCocktailsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCocktailDiv=styled.div<{alcoholic: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props: {alcoholic: string})=>(props.alcoholic === "Alcoholic" ? 'darkorange' : 'black')};
    color: ${(props: {alcoholic: string}) => (props.alcoholic !== "Alcoholic" ? 'white' : 'black')};
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function CocktailList(props : { data:Cocktail[] } ){
    return (
        <AllCocktailsDiv >
            {
                props.data.map((drink: Cocktail) =>
                    <SingleCocktailDiv key={drink.idDrink} alcoholic={drink.strAlcoholic}>
                        <h1>{drink.strDrink}</h1>
                        <p>{drink.strAlcoholic !== "Alcoholic" ? "(Non-Alcoholic)" : ""}</p>
                        <p>{drink.strCategory} | {drink.strGlass}</p>
                        <img src={drink.strDrinkThumb} alt={`image of ${drink.strDrink}`} />
                    </SingleCocktailDiv>
                )
            }
        </AllCocktailsDiv>
    );
}
