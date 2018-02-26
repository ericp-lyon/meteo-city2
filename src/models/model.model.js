/**
 * @type {Model}
 */
export class Model {

    /**
     * @constructor
     * @param {Object} model 
     */
    constructor(model) {
        model = model || {};

    

        /**
         * @type {Array}
         */
        let observers = [];

        /**
         * @returns {Array}
         */

        this.getObservers = ()=> {

            return observers;
        }
        /**
         * @param {String} name 
         * @returns {*}
         */
        this.get = (name, value) => {
           
            return undefined !== model[name] ? model[name] : value;

        }

        /**
         * @param {String} name 
         * @param {*} value 
         */
        this.set = (name, value) => {
            if(name in model){
                return model[name] = value;
           }

        }
        
        /**
         * @returns {String}
         */
        this.toString = () => {
            return window.JSON.stringify(model);
        }

        /**
         * @returns {undefined}
         */
        this.notify = () => {
            for (
                let i = 0, l = observers.length;
                i < l;
                observers[i](this), i++
            );
            for (let key in model) {
                if ("object" === typeof model[key] && (model[key] instanceof Model)) {
                    model[key].notify();
                }
            }
        }

        /**
         * @param {Function} callback 
         */
        this.bind = (callback) => {
            observers.push(callback);
        }

    }

}