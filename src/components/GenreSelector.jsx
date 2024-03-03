import { AiOutlineDown } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState } from "react";

import './GenreSelector.css'



const Options = ( listOpened, {aaa} ) => {

    const [genreSlc, setGenreSlc] = useState('')

    const genres = ['action','adventure','animation','biography','comedy','documentry','drama','family','fantasy','film-noir','history','horror','music','musical','mystery','romance','sci-fi','sport','thriller','war','western'];

    const genreList = genres.map((genre) => <p key={genres.indexOf(genre)} className="genre-element" onClick={() => {setGenreSlc(genre); aaa(genre)}}>{genre}</p> )
    
    if(listOpened.listOpened === true) {
     return <div className="genre-list">{genreList}</div> 
    }
}


const GenreSelector = ({genreSelected}) => {
    const [listOpened, setListOpened] = useState(true)
    const [selectorClassName, setSelectorClassName] = useState('selector-container-closed')
    const [selectorArrowClassName, setSelectorArrowClassName] = useState('selector-arrow-down')


    const [data, setData] = useState('aa')
    const aaa = (data) => {
        setData(data)
    }

    return(
        <div className="genreSelector">
            <button className={selectorClassName} onClick={
                () => {
                    if(listOpened===false) {
                    setListOpened(true)
                    setSelectorClassName('selector-container-opened')
                    setSelectorArrowClassName('selector-arrow-up')
                    console.log(listOpened);
                } else {
                    setListOpened(false)
                    setSelectorClassName('selector-container-closed')
                    setSelectorArrowClassName('selector-arrow-down')
                    console.log(listOpened);
                }
                    console.log(data);
                }}>
                <p>Escolha um gênero de filme</p>
                <IconContext.Provider value={{ color: "rgb(255, 153, 0)", className: `${selectorArrowClassName}`}}>
                    <AiOutlineDown />
                </IconContext.Provider>
                {/* <button onClick={() => genreSelected(data)}>oi</button> */}
            </button>
            <Options listOpened={listOpened} aaa={aaa}/>
        </div>
    )
};

export default GenreSelector;