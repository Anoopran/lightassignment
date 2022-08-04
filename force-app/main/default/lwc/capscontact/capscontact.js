import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import conObject from '@salesforce/schema/Contact';
import conFirstName from '@salesforce/schema/Contact.FirstName';
import conLastName from '@salesforce/schema/Contact.LastName';


import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ContactForm extends LightningElement {
firstName = '';
lastName = '';


contactChangeVal(event) {
console.log(event.target.label);
console.log(event.target.value);
if(event.target.label=='First Name'){
this.firstName = event.target.value;
}
if(event.target.label=='Last Name'){
this.lastName = event.target.value;
}

           
}
insertContactAction(){
console.log(this.selectedAccountId);
const fields = {};
fields[conFirstName.fieldApiName] = this.firstName.toUpperCase();
fields[conLastName.fieldApiName] = this.lastName.toUpperCase();


const recordInput = { apiName: conObject.objectApiName, fields };
createRecord(recordInput)
.then(contactobj=> {
this.contactId = contactobj.id;
this.dispatchEvent(
new ShowToastEvent({
title: 'Success',
message: 'Contact record has been created',
variant: 'success',
}),
);
})
.catch(error => {
this.dispatchEvent(
new ShowToastEvent({
title: 'Error creating record',
message: error.body.message,
variant: 'error',
}),
);
});
}
}