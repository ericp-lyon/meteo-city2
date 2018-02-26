import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import {polution, Temperature} from "./../../../src/models/temperature/temperature.model"


describe("Temperature", ()=>{
        
    let temperature;

    //Avant chauqe it le beforeEach sera invoqué pour créer un new model à que invocation
    beforeEach(()=>{
        temperature = new Temperature({
            exist : undefined
        });

    });

    it("temperature contain a temperature set to 0", ()=>{
        assert.equal(temperature.get("temperature"), 0);
    });

    it("temperature contain a min set to 0", ()=>{
        assert.equal(temperature.get("min"), 0);
    });

    it("temperature contain a max set to 0", ()=>{
        assert.equal(temperature.get("max"), 0);
    });

});
