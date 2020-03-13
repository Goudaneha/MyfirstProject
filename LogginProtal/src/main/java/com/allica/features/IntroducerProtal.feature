Feature: Login to Introducer Portal

Scenario Outline:Validate Login to Introducer Portal 

Given Broker is on HomePage
When Broker navigats to  HomePage 
And Broker should select products
Then login with valid email "<username>" 
And password "<password>" 
And click on Login button

Examples:
|username   | password   | 
|sit1990    | Allica123$ | 
   
Scenario Outline:Validate Broker Dashboard
Given Broker is on dashboard
When Broker navigated to DashBoard 
Then Broker has to click on button 
And Broker has select "<BorrowerType>"
When Broker navigated to "<DIP>" 
Then Broker should select type "<EntityType>" 
Then Broker navigats to DIP
Then Broker should click "<button>" 

Examples:
|BorrowerType   | DIP               |EntityType          |button   | 
|Limited Company|Commercial mortgage|Mortgage Application|continue | 
#|start new application |Partnership    |Investment Mortgage|Mortgage Application|

Scenario Outline:Validate the applicant’s company 
Given Broker is on company details page
Then Broker has to provide "<companyName>" or  "<companyNumber>"
When Broker verifed companyName
Then Broker has to provide "<applicantname>" 
And "<emailid>" on email feild
And "<mobileno>" on mobile feild
Then Broker click on "<button>"  

Examples:
| companyName  | applicantname   | emailid                         | mobileno   |button              |
| eat          | EMILIANO BELLIO | nehaashokj@maveric-systems.com  | 9035878138 |confirm and continue|

Scenario Outline:Validate Product details
Given Broker is on Product details page
Then Broker has to select "<Entity1>" value
And Broker has to provide "<address>" in field
When Broker navigated to Property Type
Then Broker should select "<Entity2>"
And Broker has to select "<Entity3>"
When Broker navigated to propertybuilt
Then Broker has to provide "<year>" in year
And Broker has to select "<Entity4>" type

Examples:
|Entity1|address|Entity2   |Entity3  |year |Entity4        |
|7000000|ign    |Warehouses|freehold |2009 |capital raising|

Scenario Outline:Validate Borrowing needs details
Given Broker is on Borrowing needs
Then Broker has to provide amount "<amount>"
And select "<property type>" from list
And select "<year>" from dropdown
And select "<month>" from month
And select "<Entityvalue>" balance
And clicks on "<save and continue>" button

Examples:
|amount |property type      |year|month|Entityvalue                        |save and continue|
|2200000|capital & interest |10  |2    |To be paid separately at completion|click            |

Scenario Outline:validate for Affordability
Given Broker is on  Affordability page
Then Broker has to provide year "<turnover1>"
And last three year "<turnover2>"
And click on button

Examples:
|turnover1|turnover2|
|220000   |342000   |

Scenario Outline:validate Summary page
Given Broker has to validate summary page
Then click on save
Then click on dashboard

Examples:
|Button|
|save|

