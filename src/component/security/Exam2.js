import * as React from 'react';
import {useState} from 'react';
import HomePage from "../../pages/HomePage";

const Exam2 = (props) => {

    const [count, setCount] = useState('')
    const [countBeds, setCountBeds] = useState('')
    const [showResults, setShowResult] = React.useState(false);
    let countBedss = 0;

    for(let i = 0; i < props.rooms.length; i++) {
        countBedss += props.rooms[i].bedsNumber;
    }

    // const bolS = () => showResults ? setShowResult(true) : setShowResult(false);
    const bolS = () => setShowResult(true);

    return (
        <div>
            <input type="submit" value="ShowInfo" onClick={bolS} />
            { showResults ? " Количество комнат: " + props.rooms.length + " Количество кроватей: "
                + countBedss : null }
            {<Results/>}
        </div>
    );
};

const Results = (rooms) => (

    <div id="results" className="search-results">
        <label></label>
    </div>
)

export {Exam2};