public with sharing class CaseNumber {
    @AuraEnabled(cacheable=true)
    public static List<Case> findCaseByAccountId(String accountId) {      
        return [
            SELECT CaseNumber,Origin,  Reason
            FROM Case
            WHERE AccountId=:accountId 

            ];
    }
}
