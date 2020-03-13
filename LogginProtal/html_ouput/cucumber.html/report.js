$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/nehaashokj/Downloads/Allica/LogginProtal/src/main/java/com/allica/features/IntroducerProtal.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Introducer Portal",
  "description": "",
  "id": "login-to-introducer-portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate Login to Introducer Portal",
  "description": "",
  "id": "login-to-introducer-portal;validate-login-to-introducer-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Broker is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Broker navigats to  HomePage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Broker should select products",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "login with valid email \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on Login button",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-to-introducer-portal;validate-login-to-introducer-portal;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "login-to-introducer-portal;validate-login-to-introducer-portal;;1"
    },
    {
      "cells": [
        "sit1990",
        "Allica123$"
      ],
      "line": 14,
      "id": "login-to-introducer-portal;validate-login-to-introducer-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Validate Login to Introducer Portal",
  "description": "",
  "id": "login-to-introducer-portal;validate-login-to-introducer-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Broker is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Broker navigats to  HomePage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Broker should select products",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "login with valid email \"sit1990\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "password \"Allica123$\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.broker_is_on_HomePage()"
});
formatter.result({
  "duration": 179711200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.broker_navigats_to_HomePage()"
});
formatter.result({
  "duration": 20400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.broker_should_select_products()"
});
formatter.result({
  "duration": 3825700,
  "error_message": "java.lang.NullPointerException\r\n\tat com.allica.utility.CommonMethods.clickon(CommonMethods.java:11)\r\n\tat com.allica.StepDefinition.LoginStepDefinition.broker_should_select_products(LoginStepDefinition.java:47)\r\n\tat ✽.And Broker should select products(C:/Users/nehaashokj/Downloads/Allica/LogginProtal/src/main/java/com/allica/features/IntroducerProtal.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "sit1990",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.login_with_valid_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Allica123$",
      "offset": 10
    }
  ],
  "location": "LoginStepDefinition.password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Validate Broker Dashboard",
  "description": "",
  "id": "login-to-introducer-portal;validate-broker-dashboard",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Broker is on dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Broker navigated to DashBoard",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Broker has to click on button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Broker has select \"\u003cBorrowerType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Broker navigated to \"\u003cDIP\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Broker should select type \"\u003cEntityType\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Broker navigats to DIP",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Broker should click \"\u003cbutton\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-to-introducer-portal;validate-broker-dashboard;",
  "rows": [
    {
      "cells": [
        "BorrowerType",
        "DIP",
        "EntityType",
        "button"
      ],
      "line": 27,
      "id": "login-to-introducer-portal;validate-broker-dashboard;;1"
    },
    {
      "cells": [
        "Limited Company",
        "Commercial mortgage",
        "Mortgage Application",
        "continue"
      ],
      "line": 28,
      "id": "login-to-introducer-portal;validate-broker-dashboard;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Validate Broker Dashboard",
  "description": "",
  "id": "login-to-introducer-portal;validate-broker-dashboard;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Broker is on dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Broker navigated to DashBoard",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Broker has to click on button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Broker has select \"Limited Company\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Broker navigated to \"Commercial mortgage\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Broker should select type \"Mortgage Application\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Broker navigats to DIP",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Broker should click \"continue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.broker_is_on_dashboard()"
});
formatter.result({
  "duration": 1999627400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.broker_navigated_to_DashBoard()"
});
formatter.result({
  "duration": 303200,
  "error_message": "java.lang.NullPointerException\r\n\tat com.allica.StepDefinition.LoginStepDefinition.broker_navigated_to_DashBoard(LoginStepDefinition.java:70)\r\n\tat ✽.When Broker navigated to DashBoard(C:/Users/nehaashokj/Downloads/Allica/LogginProtal/src/main/java/com/allica/features/IntroducerProtal.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.broker_has_to_click_on_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Limited Company",
      "offset": 19
    }
  ],
  "location": "LoginStepDefinition.broker_has_select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Commercial mortgage",
      "offset": 21
    }
  ],
  "location": "LoginStepDefinition.broker_navigated_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mortgage Application",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.broker_should_select_type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.broker_navigats_to_DIP()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "continue",
      "offset": 21
    }
  ],
  "location": "LoginStepDefinition.broker_should_click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 29,
      "value": "#|start new application |Partnership    |Investment Mortgage|Mortgage Application|"
    }
  ],
  "line": 31,
  "name": "Validate the applicant�s company",
  "description": "",
  "id": "login-to-introducer-portal;validate-the-applicant�s-company",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "Broker is on company details page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Broker has to provide \"\u003ccompanyName\u003e\" or  \"\u003ccompanyNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Broker verifed companyName",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Broker has to provide \"\u003capplicantname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "\"\u003cemailid\u003e\" on email feild",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "\"\u003cmobileno\u003e\" on mobile feild",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Broker click on \"\u003cbutton\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "login-to-introducer-portal;validate-the-applicant�s-company;",
  "rows": [
    {
      "cells": [
        "companyName",
        "applicantname",
        "emailid",
        "mobileno",
        "button"
      ],
      "line": 41,
      "id": "login-to-introducer-portal;validate-the-applicant�s-company;;1"
    },
    {
      "cells": [
        "eat",
        "EMILIANO BELLIO",
        "nehaashokj@maveric-systems.com",
        "9035878138",
        "confirm and continue"
      ],
      "line": 42,
      "id": "login-to-introducer-portal;validate-the-applicant�s-company;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 42,
  "name": "Validate the applicant�s company",
  "description": "",
  "id": "login-to-introducer-portal;validate-the-applicant�s-company;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "Broker is on company details page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Broker has to provide \"eat\" or  \"\u003ccompanyNumber\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Broker verifed companyName",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Broker has to provide \"EMILIANO BELLIO\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "\"nehaashokj@maveric-systems.com\" on email feild",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "\"9035878138\" on mobile feild",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Broker click on \"confirm and continue\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.broker_is_on_company_details_page()"
});
formatter.result({
  "duration": 433900,
  "error_message": "java.lang.NullPointerException\r\n\tat com.allica.StepDefinition.LoginStepDefinition.broker_is_on_company_details_page(LoginStepDefinition.java:110)\r\n\tat ✽.Given Broker is on company details page(C:/Users/nehaashokj/Downloads/Allica/LogginProtal/src/main/java/com/allica/features/IntroducerProtal.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "eat",
      "offset": 23
    },
    {
      "val": "\u003ccompanyNumber\u003e",
      "offset": 33
    }
  ],
  "location": "LoginStepDefinition.broker_has_to_provide_or(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.broker_verifed_companyName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "EMILIANO BELLIO",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.broker_has_to_provide(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "nehaashokj@maveric-systems.com",
      "offset": 1
    }
  ],
  "location": "LoginStepDefinition.on_email_feild(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9035878138",
      "offset": 1
    }
  ],
  "location": "LoginStepDefinition.on_mobile_feild(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "confirm and continue",
      "offset": 17
    }
  ],
  "location": "LoginStepDefinition.broker_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "Validate Product details",
  "description": "",
  "id": "login-to-introducer-portal;validate-product-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "Broker is on Product details page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Broker has to select \"\u003cEntity1\u003e\" value",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Broker has to provide \"\u003caddress\u003e\" in field",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Broker navigated to Property Type",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Broker should select \"\u003cEntity2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Broker has to select \"\u003cEntity3\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Broker navigated to propertybuilt",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Broker has to provide \"\u003cyear\u003e\" in year",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Broker has to select \"\u003cEntity4\u003e\" type",
  "keyword": "And "
});
formatter.examples({
  "line": 55,
  "name": "",
  "description": "",
  "id": "login-to-introducer-portal;validate-product-details;",
  "rows": [
    {
      "cells": [
        "Entity1",
        "address",
        "Entity2",
        "Entity3",
        "year",
        "Entity4"
      ],
      "line": 56,
      "id": "login-to-introducer-portal;validate-product-details;;1"
    },
    {
      "cells": [
        "7000000",
        "ign",
        "Warehouses",
        "freehold",
        "2009",
        "capital raising"
      ],
      "line": 57,
      "id": "login-to-introducer-portal;validate-product-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 57,
  "name": "Validate Product details",
  "description": "",
  "id": "login-to-introducer-portal;validate-product-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "Broker is on Product details page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Broker has to select \"7000000\" value",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Broker has to provide \"ign\" in field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Broker navigated to Property Type",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Broker should select \"Warehouses\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Broker has to select \"freehold\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Broker navigated to propertybuilt",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Broker has to provide \"2009\" in year",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Broker has to select \"capital raising\" type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.broker_is_on_Product_details_page()"
});
formatter.result({
  "duration": 288800,
  "error_message": "java.lang.NullPointerException\r\n\tat com.allica.StepDefinition.LoginStepDefinition.broker_is_on_Product_details_page(LoginStepDefinition.java:150)\r\n\tat ✽.Given Broker is on Product details page(C:/Users/nehaashokj/Downloads/Allica/LogginProtal/src/main/java/com/allica/features/IntroducerProtal.feature:45)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "7000000",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.broker_has_to_select_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ign",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.broker_has_to_provide_in_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.broker_navigated_to_Property_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Warehouses",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.broker_should_select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "freehold",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.broker_has_to_select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.broker_navigated_to_propertybuilt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2009",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.broker_has_to_provide_in_year(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "capital raising",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.broker_has_to_select_type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "Validate Borrowing needs details",
  "description": "",
  "id": "login-to-introducer-portal;validate-borrowing-needs-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "Broker is on Borrowing needs",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "Broker has to provide amount \"\u003camount\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "select \"\u003cproperty type\u003e\" from list",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "select \"\u003cyear\u003e\" from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "select \"\u003cmonth\u003e\" from month",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "select \"\u003cEntityvalue\u003e\" balance",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "clicks on \"\u003csave and continue\u003e\" button",
  "keyword": "And "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "login-to-introducer-portal;validate-borrowing-needs-details;",
  "rows": [
    {
      "cells": [
        "amount",
        "property type",
        "year",
        "month",
        "Entityvalue",
        "save and continue"
      ],
      "line": 69,
      "id": "login-to-introducer-portal;validate-borrowing-needs-details;;1"
    },
    {
      "cells": [
        "2200000",
        "capital \u0026 interest",
        "10",
        "2",
        "To be paid separately at completion",
        "click"
      ],
      "line": 70,
      "id": "login-to-introducer-portal;validate-borrowing-needs-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 70,
  "name": "Validate Borrowing needs details",
  "description": "",
  "id": "login-to-introducer-portal;validate-borrowing-needs-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "Broker is on Borrowing needs",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "Broker has to provide amount \"2200000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "select \"capital \u0026 interest\" from list",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "select \"10\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "select \"2\" from month",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "select \"To be paid separately at completion\" balance",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "clicks on \"click\" button",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.broker_is_on_Borrowing_needs()"
});
formatter.result({
  "duration": 66400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2200000",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.broker_has_to_provide_amount(String)"
});
formatter.result({
  "duration": 4484100,
  "error_message": "java.lang.NullPointerException\r\n\tat com.allica.StepDefinition.LoginStepDefinition.broker_has_to_provide_amount(LoginStepDefinition.java:194)\r\n\tat ✽.Then Broker has to provide amount \"2200000\"(C:/Users/nehaashokj/Downloads/Allica/LogginProtal/src/main/java/com/allica/features/IntroducerProtal.feature:61)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "capital \u0026 interest",
      "offset": 8
    }
  ],
  "location": "LoginStepDefinition.select_from_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 8
    }
  ],
  "location": "LoginStepDefinition.select_from_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    }
  ],
  "location": "LoginStepDefinition.select_from_month(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "To be paid separately at completion",
      "offset": 8
    }
  ],
  "location": "LoginStepDefinition.select_balance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "click",
      "offset": 11
    }
  ],
  "location": "LoginStepDefinition.clicks_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "validate for Affordability",
  "description": "",
  "id": "login-to-introducer-portal;validate-for-affordability",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "Broker is on  Affordability page",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "Broker has to provide year \"\u003cturnover1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "last three year \"\u003cturnover2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "click on button",
  "keyword": "And "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "login-to-introducer-portal;validate-for-affordability;",
  "rows": [
    {
      "cells": [
        "turnover1",
        "turnover2"
      ],
      "line": 79,
      "id": "login-to-introducer-portal;validate-for-affordability;;1"
    },
    {
      "cells": [
        "220000",
        "342000"
      ],
      "line": 80,
      "id": "login-to-introducer-portal;validate-for-affordability;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 80,
  "name": "validate for Affordability",
  "description": "",
  "id": "login-to-introducer-portal;validate-for-affordability;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "Broker is on  Affordability page",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "Broker has to provide year \"220000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "last three year \"342000\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "click on button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.broker_is_on_Affordability_page()"
});
formatter.result({
  "duration": 45800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "220000",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.broker_has_to_provide_year(String)"
});
formatter.result({
  "duration": 302000,
  "error_message": "java.lang.NullPointerException\r\n\tat com.allica.StepDefinition.LoginStepDefinition.broker_has_to_provide_year(LoginStepDefinition.java:224)\r\n\tat ✽.Then Broker has to provide year \"220000\"(C:/Users/nehaashokj/Downloads/Allica/LogginProtal/src/main/java/com/allica/features/IntroducerProtal.feature:74)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "342000",
      "offset": 17
    }
  ],
  "location": "LoginStepDefinition.last_three_year(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 82,
  "name": "validate Summary page",
  "description": "",
  "id": "login-to-introducer-portal;validate-summary-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 83,
  "name": "Broker has to validate summary page",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "click on save",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "click on dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 87,
  "name": "",
  "description": "",
  "id": "login-to-introducer-portal;validate-summary-page;",
  "rows": [
    {
      "cells": [
        "Button"
      ],
      "line": 88,
      "id": "login-to-introducer-portal;validate-summary-page;;1"
    },
    {
      "cells": [
        "save"
      ],
      "line": 89,
      "id": "login-to-introducer-portal;validate-summary-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 89,
  "name": "validate Summary page",
  "description": "",
  "id": "login-to-introducer-portal;validate-summary-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 83,
  "name": "Broker has to validate summary page",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "click on save",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "click on dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.broker_has_to_validate_summary_page()"
});
formatter.result({
  "duration": 56400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_save()"
});
formatter.result({
  "duration": 311200,
  "error_message": "java.lang.NullPointerException\r\n\tat com.allica.StepDefinition.LoginStepDefinition.click_on_save(LoginStepDefinition.java:242)\r\n\tat ✽.Then click on save(C:/Users/nehaashokj/Downloads/Allica/LogginProtal/src/main/java/com/allica/features/IntroducerProtal.feature:84)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_dashboard()"
});
formatter.result({
  "status": "skipped"
});
});