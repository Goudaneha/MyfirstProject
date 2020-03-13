package com.allica.PageObjects;

import org.openqa.selenium.By;

public class Login {
	
	public By IntroducerPortal = By.xpath("//a[contains(text(),'Login to Introducer Portal')]");
	public By username = By.xpath("//input[@id='username']");
	public By pasword =By.xpath("//input[@id='password']");
	public By loginButton = By.xpath("//a[@title='Login']");
	public By application = By.xpath("//button[text()='Start new application']");
	public By borrowerType = By.xpath("//span[text()='Limited Company']");
	public By savecontinue = By.xpath("//button[contains(text(),'Save & continue')]");
	public By select =By.xpath("//button[@translations='[object Object]']");
	public By type1 = By.xpath("(//button[text()='Select'])[1]");
	public By save = By.xpath("//button[@form='PROD_SELECTION']");
	public By complete = By.xpath("//button[@form='COMPANY_INFO']");
	
}//button[@form='sole-byb']
