const AddressValidator = require('./AddressValidator.js');

module.exports = class CustomerValidator{
    validateCustomer(customer) {
        let errors = [];
        if(customer.firstName === undefined || customer.firstName === null){
            errors.push('FirstName cant be undefined or null');
        }
        else if (customer.firstName > 50){
            errors.push('FirstName, length is long');
        }

        if(customer.lastName === undefined || customer.lastName === null){
            errors.push('LastName cant be undefined or null');
        }
        else if (customer.lastName > 50){
            errors.push('LastName, length is long');
        }

        if(customer.address === undefined || customer.address === null){
            errors.push('Address cant be undefined or null');
        }
        else {
            let addressValidator = new AddressValidator();
            let errorsAddress = addressValidator.validateAddress(customer.address);
            for (let i = 0; i < errorsAddress.length; i++) {
                errors.push(errorsAddress[i]);
            }
        }

        if(customer.phoneNumber === undefined || customer.phoneNumber === null){
            errors.push('PhoneNumber cant be undefined or null');
        }
        else {
            let checkPhone = /^\+[1-9]\d{1,14}$/.test(customer.phoneNumber);
            if (!checkPhone) {
                errors.push('PhoneNumber is incorrect');
            }
        }

        if(customer.email === undefined || customer.email === null){
            errors.push('Email cant be undefined or null');
        }
        else {
            let checkEmail =  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(customer.email);
            if (!checkEmail) {
                errors.push('Email is incorrect');
            }
        }

        if(customer.notes === undefined || customer.notes === null){
            errors.push('Notes cant be undefined or null');
        }
        else if (customer.notes.length === 0){
            errors.push('Notes must have 1 or more');
        }

        if(customer.totalPurchasesAmount === undefined){
            errors.push('TotalPurchasesAmount cant be undefined');
        }
        else if (isNaN(customer.totalPurchasesAmount)){
            errors.push('TotalPurchasesAmount is incorrect');
        }

        if(customer.lastPurchaseDate === undefined){
            errors.push('LastPurchaseDate cant be undefined');
        }
        else{
            if(Object.prototype.toString.call(customer.lastPurchaseDate) === '[object Date]'){
                if (customer.lastPurchaseDate < (new Date(2020, 1, 1))) {
                    errors.push('LastPurchaseDate is incorrect');
                }
            }
            else{
                errors.push('LastPurchaseDate is not date');
            }
        }
        return errors;
    }
}