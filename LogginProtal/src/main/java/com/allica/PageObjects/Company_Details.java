package com.allica.PageObjects;

import org.openqa.selenium.By;

public class Company_Details {

	public By company_name = By.id("tab-1-input-action");
			//xpath("//input[@id='tab-1-input-action']");
	public By list_company = By.xpath("//button[contains(text(),'EAT LIMITED')]/following::li[1]");
	public By search = By.xpath("(//div[@class='col col-sml-4']//button)[1]");
	public By correct_company = By.xpath("//button[contains(text(),'Yes')]");
	public By applicants_name = By.xpath("//select[@id='contact-name']");
	//public By list_applicants = By.xpath("//option[contains(text(),'AXEL BHAT')]");
	public By email = By.xpath("//input[@id='contact-email']");
	public By mobile = By.xpath("//input[@id='contact-phone']");
	public By submit = By.xpath("//button[contains(text(),'Confirm and continue')]");
	
}
//*[@id="company-details"]/div/div/div/fieldset/div/div/div[1]/div/div[2]/div[1]/div/div/div[2]/button
