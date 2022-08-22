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
            <table className="table">                    
                <tr className="tr">
                    <th>Shark</th>
                    {shark_info.map((selected_shark, i) =>
                        <td>{selected_shark.species}</td>
                    )}
                </tr>
                <tr className="tr">
                    <th>Image</th>
                    {shark_info.map((selected_shark, i) =>
                        <td><img src={selected_shark.image} alt={selected_shark.alttext} width="300" height="200"></img></td>
                    )}
                </tr>
                <tr className="tr">
                    <th>Size</th>
                    {shark_info.map((selected_shark, i) =>
                        <td>{selected_shark.size}</td>
                    )}
                </tr>
                <tr className="tr">
                    <th>Diet</th>
                    {shark_info.map((selected_shark, i) =>
                        <td>{selected_shark.diet}</td>
                    )}
                </tr>
                <tr className="tr">
                    <th>Behavior</th>
                    {shark_info.map((selected_shark, i) =>
                        <td>{selected_shark.behavior}</td>
                    )}
                </tr>
                <tr className="tr">
                    <th>Reproduction</th>
                    {shark_info.map((selected_shark, i) =>
                        <td>{selected_shark.reproduction}</td>
                    )}
                </tr>
            </table>
        </article>
    );
}

export default ComparisonPage;