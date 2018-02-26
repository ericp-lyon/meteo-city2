import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import { Model} from "./../../../src/models/model.model"
import {window} from "./../window"



//description du sujet de test
describe("Model", ()=>{
        
    let model;

    //Avant chauqe it le beforeEach sera invoqué pour créer un new model à que invocation
    beforeEach(()=>{
        model = new Model({
            exist : undefined
        });

    });

    it("getObservers returns an Array", ()=>{

        assert.isArray(model.getObservers());

    });


    // description du test unitaire
    it("Setter  do not mute model property if not exists", ()=>{

        let value = true;
        model.set("foo", value);
        assert.equal(model.get("foo"), undefined)

    });
    it("Setter mute model property if exists", ()=>{

        let value = true;
        model.set("exist", value);
        assert.equal(model.get("exist"), value)

    });

    it("Getter retrieve defaut value if property if undefined", ()=>{
        
        let value = "default value";
        assert.equal(model.get("exist", value), value);

    });

    it("Getter retrieve defaut value if property do not exists", ()=>{
        
        let value = "default value";
        assert.equal(model.get("foo", value), value);

    });
    
    // the window problem
    it("toString get JSON representation of model property", ()=>{
        assert.equal(model.toString(), "{}")
    });

    it("toString get JSON representation of muted model property", ()=>{
        model.set("exist", true);
        assert.equal(model.toString(), "{\"exist\":true}")
    });

    // test notify


    it("notify call binded callback", ()=>{
        let called = false;
        let callback = () => {
            called =true;
        }
        
        model.bind(callback);
        model.notify();
        assert.equal(called,true);

    });

});

