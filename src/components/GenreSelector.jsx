import { AiOutlineDown } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState } from "react";

import './GenreSelector.css'

const GenreSelector = ({genreSelected}) => {
    const [listOpened, setListOpened] = useState(false)
    const [listSituation, setListSituation] = useState(<div></div>)
    const [selectorClassName, setSelectorClassName] = useState('selector-container-closed')
    const [selectorArrowClassName, setSelectorArrowClassName] = useState('selector-arrow-down')

    const genres = ['action','adventure','animation','biography','comedy','documentry','drama','family','fantasy','film-noir','history','horror','music','musical','mystery','romance','sci-fi','sport','thriller','war','western'];
    
    const genreList = genres.map((genre) => <p key={genres.indexOf(genre)} className="genre-element" onClick={() => genreSelected(genre)}>{genre}</p> )

    return(
        <div className="genreSelector">
            <button className={selectorClassName} onClick={
                () => {
                    if(listOpened===false) {
                    setListOpened(true)
                    setSelectorClassName('selector-container-opened')
                    setSelectorArrowClassName('selector-arrow-up')
                    setListSituation(<div className="genre-list">{genreList}</div>)
                } else {
                    setListOpened(false)
                    setSelectorClassName('selector-container-closed')
                    setSelectorArrowClassName('selector-arrow-down')
                    setListSituation(<div></div>)
                }
                }}>
                <p>Escolha um gênero de filme</p>
                <IconContext.Provider value={{ color: "rgb(255, 153, 0)", className: `${selectorArrowClassName}`}}>
                    <AiOutlineDown />
                </IconContext.Provider>
            </button>
            {listSituation}
        </div>
    )
};

export default GenreSelector;