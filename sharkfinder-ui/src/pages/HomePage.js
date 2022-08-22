import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage ({sharks, images, setSelections}) {
    let shark_boxes = sharks;

    for (let image of images) {
        for (let shark_box of shark_boxes) {
            if (image.id === shark_box.id) {
                shark_box.image = image.link;
            }
        }
    }

    const history = useHistory();

    const new_selections = [];

    const handleChange = (e) => {
        new_selections.push(e.target.value);
    }

    const handleReset = () => {
        alert(`You have reset your selections.`);
        window.location.reload(false);
    }

    const handleSubmit = () => {
        if (new_selections.length < 1){
            alert(`Please select at least one species for more information.`);
        } else if (new_selections.length > 3){
            alert(`Please reduce your number of selections to a maximum of three.`);
        } else{
            setSelections(new_selections);
            alert(`You have selected: ` + new_selections);
            history.push("/comparison");
        }
    }

    return (
        <article className="main">
            <section className="description">
                <p>Sharkfinder helps you, the discerning shark enthusiast, choose your perfect
                aquatic companion. With our shark comparison tool, compare sharks based on 
                size, behavior, diet, and reproduction.
                </p>
            </section>
            <form onReset={handleReset} onSubmit={handleSubmit}>
            <fieldset>
                <legend className="legend">Please select up to three sharks for comparison</legend>
                <div className="flex-container">                
                    {shark_boxes.map((shark, i) => 
                        <div className="container">
                            <img src={shark.image} alt={shark.alttext} width="400" height="300"></img><br></br>
                            <input type="checkbox" name="species" value={shark.species} onChange={handleChange}></input>
                            <label for={shark.species}>{shark.species}</label>                          
                        </div>
                    )}                                        
                </div>
                <input type="reset" className="button" value="Reset Selections"></input>
                <input type="submit" className="button" value="Submit Selections"></input>
            </fieldset>
            </form>
        </article>
    );
}

export default HomePage;
