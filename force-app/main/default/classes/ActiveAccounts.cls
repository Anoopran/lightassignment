public  class ActiveAccounts {
    @AuraEnabled(Cacheable = true)
     public static List<Account> getAllActiveAccounts(){
        return [SELECT Name,Active__c FROM Account WHERE Active__c = 'Yes'];
     }
     @AuraEnabled(Cacheable = true)
     public static List<Account> getAllInactiveAccounts(){
        return [SELECT Name,Active__c FROM Account WHERE Active__c = 'No'];
     }
}
