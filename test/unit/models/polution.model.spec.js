import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import {polution, Polution} from "./../../../src/models/polution/polution.model"

describe("Polution", ()=>{
        
    let polution;

    //Avant chauqe it le beforeEach sera invoqué pour créer un new model à que invocation
    beforeEach(()=>{
        polution = new Polution({
            exist : undefined
        });
    });
   
    it("polution contain à min set to 0", ()=>{
        assert.equal(polution.get("aqi"), 0);
    });

    it("polution contain à pm set to 0", ()=>{
        assert.equal(polution.get("pm"), 0);
    });

    it("polution contain à ozone set to 0", ()=>{
        assert.equal(polution.get("ozone"), 0);
    });

});
