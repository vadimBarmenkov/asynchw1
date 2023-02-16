import read from "./reader";
import json from "./parser";
import GameSaving from "./GameSaving";

export default class GameSavingLoader {
     load(){
        return new Promise((resolve) => {
            read().then(response => {
                return json(response);
            }).then(response => {
                let saving = JSON.parse(response);
                resolve(new GameSaving(saving.id, saving.created, saving.userInfo));
            })
        })
     };
}