package com.allica.utility;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.allica.StepDefinition.LoginStepDefinition;

public class CommonMethods extends LoginStepDefinition {

	public static void clickon(By clk) {
		WebElement webele = DriverSetup.getdriver().findElement(clk);
		webele.clear();
	}
	
	public static void sendkeys(By send,String elements) {
		WebElement webele1 = DriverSetup.getdriver().findElement(send);
		webele1.sendKeys(elements);
	}
}
