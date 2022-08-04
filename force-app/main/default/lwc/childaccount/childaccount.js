import { LightningElement,api } from 'lwc';

const COLUMNS = [
     {label: 'Name', fieldName: 'Name', type:'text'},
     {label: 'Active', fieldName: 'Active__c', type:'text'}
 ];

export default class ThirdChildClass extends LightningElement {
    @api acc;
     columns = COLUMNS;
}