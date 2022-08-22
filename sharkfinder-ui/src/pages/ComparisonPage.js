import React from 'react';

function ComparisonPage ({sharks, images, selections}) {
    const shark_info = [];
    for (let selection of selections){
        let selected_shark = {};
        selected_shark.species = selection;
        for (let shark of sharks){
            if (selection === shark.species){
                for (let image of images){
                    if (shark.id === image.id){
                        selected_shark.image = image.link;
                    };
                };
                selected_shark.wiki = shark.wiki;
                selected_shark.alttext = shark.alttext;
                selected_shark.size = shark.size;
                selected_shark.diet = shark.diet;
                selected_shark.behavior = shark.behavior;
                selected_shark.reproduction = shark.reproduction;
            }
        }
        shark_info.push(selected_shark);
    }
    
    return (
        <article className="main">
            <div>Select the shark name or image to go to the Wikipedia page.</div>
            <br></br>
            <table className="table">
                    <tr className="tr">
                        <th>Shark</th>
                        <th>Image</th>
                        <th>Size</th>
                        <th>Diet</th>
                        <th>Behavior</th>
                        <th>Reproduction</th>
                    </tr>
                    {shark_info.map((selected_shark, i) =>
                        <tr className="tr">
                            <td><a href={selected_shark.wiki} target="_blank">{selected_shark.species}</a></td>
                            <td><a href={selected_shark.wiki} target="_blank"><img src={selected_shark.image} alt={selected_shark.alttext} width="300" height="200"></img></a></td>
                            <td>{selected_shark.size}</td>
                            <td>{selected_shark.diet}</td>
                            <td>{selected_shark.behavior}</td>
                            <td>{selected_shark.reproduction}</td>
                        </tr>
                    )}
            </table>
        </article>
    );
}

export default ComparisonPage;