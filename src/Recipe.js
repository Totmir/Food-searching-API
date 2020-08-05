import React from 'react';
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.recipe}>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className="image" src={image} alt="" />
            <div className="calories"><p>Calories:</p><p>{calories}</p></div>
        </div>
    )
}

export default Recipe;