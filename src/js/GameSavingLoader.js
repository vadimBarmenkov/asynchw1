import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
     load(){
        return new Promise((resolve) => {
            read().then(response => {
                return json(response);
            }).then(response => {
                let saving = JSON.parse(response);
                resolve(saving);
            })
        })
     };
}