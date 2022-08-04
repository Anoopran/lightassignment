public with sharing class AccountCase {
    
        public String accountId{get;set;}
        public Account actObj{get;set;}
        public AccountCase() {
            actObj = new Account();
        }  
        @AuraEnabled(cacheable=true)    
        public static List<Account> getAccounts(){
            return [select id,name,type,phone,industry from Account ];
        }
        @AuraEnabled
        public static List<Account> getAccountRecordsList(){
            return [select id,name,type,phone,industry from Account ];
        }
        public pageReference retrieveAccountDetail(){
            if(accountId!=null){
                 actObj = [select id,name,type,industry from Account where id=:accountId];
                
            }       
            return null;        
        }
    
    }

