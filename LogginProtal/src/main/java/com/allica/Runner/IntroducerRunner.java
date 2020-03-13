package com.allica.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:/Users/nehaashokj/Downloads/Allica/LogginProtal/src/main/java/com/allica/features/IntroducerProtal.feature",
		glue = {"com.allica.StepDefinition"},
		format = {"pretty","html:html_ouput/cucumber.html","json:json_output/cucumber.json"},
		monochrome = true,
		strict = true,
		dryRun =false
		)

public class IntroducerRunner {

}
