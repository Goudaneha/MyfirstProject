package com.allica.PageObjects;

import org.openqa.selenium.By;

public class Login {
	
	public static final By IntroducerPortal = By.xpath("//a[contains(text(),'Login to Introducer Portal')]");
	public static final By username = By.xpath("//input[@id='username']");
	public static final By pasword =By.xpath("//input[@id='password']");
	public static final By loginButton = By.xpath("//a[@title='Login']");
	public static final By application = By.xpath("//button[text()='Start new application']");
	public static final By borrowerType = By.xpath("//span[text()='Limited Company']");
	public static final By savecontinue = By.xpath("//button[contains(text(),'Save & continue')]");
	public static final By select =By.xpath("//button[@translations='[object Object]']");
	public static final By type1 = By.xpath("(//button[text()='Select'])[1]");
	public static final By save = By.xpath("//button[@form='PROD_SELECTION']");
	public static final By complete = By.xpath("//button[@form='COMPANY_INFO']");
	
}