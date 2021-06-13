const addressTypes = require('./AddressTypes.js');
const countrys = require('./Countrys.js');

module.exports = class AddressValidator{
    validateAddress(address) {
        let errors = [];
        if(address.addressLine === undefined || address.addressLine === null){
            errors.push('AddressLine cant be undefined or null');
        }
        else if (address.addressLine.length > 100){
            errors.push('AddressLine, length is long');
        }

        if(address.addressLine2 === undefined || address.addressLine2 === null){
            errors.push('AddressLine2 cant be undefined or null');
        }
        else if (address.addressLine2.length > 100){
            errors.push('AddressLine2, length is long');
        }

        if(address.addressType === undefined || address.addressType === null){
            errors.push('addressType cant be undefined or null');
        }
        else {
            let trigger = false;
            for (let i = 0; i < addressTypes.length; i++) {
                if( addressTypes[i] === address.addressType){
                    trigger = true;
                }
            }
            if (!trigger) {
                errors.push('addressType is incorrect');
            }
        }

        if(address.city === undefined || address.city === null){
            errors.push('City cant be undefined or null');
        }
        else if (address.city.length > 50){
            errors.push('City, length is long');
        }

        if(address.postalCode === undefined || address.postalCode === null){
            errors.push('PostalCode cant be undefined or null');
        }
        else if (address.postalCode.length > 6){
            errors.push('PostalCode, length is long');
        }

        if(address.state === undefined || address.state === null){
            errors.push('State cant be undefined or null');
        }
        else if (address.state.length > 20){
            errors.push('State, length is long');
        }

        if(address.country === undefined || address.country === null){
            errors.push('Country cant be undefined or null');
        }
        else {
            let trigger = false;
            for (let i = 0; i < countrys.length; i++) {
                if( countrys[i] === address.country){
                    trigger = true;
                }
            }
            if (!trigger) {
                errors.push('Country is incorrect');
            }
        }


        return errors;
    }
}
