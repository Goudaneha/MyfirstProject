package com.allica.StepDefinition;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import com.allica.PageObjects.Affordability;
import com.allica.PageObjects.Company_Details;
import com.allica.PageObjects.Login;
import com.allica.PageObjects.Product_Details;
import com.allica.PageObjects.Summary;
import com.allica.utility.CommonMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	public static WebDriver driver;
	Login LG = new Login();
	Company_Details CD = new Company_Details();
	Product_Details PD = new Product_Details();
	Affordability AF = new Affordability();
	Summary SS = new Summary();
	
	//Scenario Outline:Validate Login to Introducer Portal 
	@Given("^Broker is on HomePage$")
	public void broker_is_on_HomePage() {
//		System.setProperty("webdriver.chrome.driver","C://Users//nehaashokj//Downloads//chromedriver_win32//chromedriver.exe");
//	    driver = new ChromeDriver();
//	    driver.manage().window().maximize();
//	    driver.manage().deleteAllCookies();
//	    driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
//	    driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
//	    driver.get("https://web-sit.allica.co.uk"); 
	}
	@When("^Broker navigats to  HomePage$")
	public void broker_navigats_to_HomePage() {
		//String title = driver.getTitle();
		//Assert.assertEquals("Home Page", title);
		//System.out.println("Title ="+ title );
	}
	@Then("^Broker should select products$")
	public void broker_should_select_products() {
		//driver.findElement(LG.IntroducerPortal).click();
		CommonMethods.clickon(LG.IntroducerPortal);
	}
	@Then("^login with valid email \"([^\"]*)\"$")
	public void login_with_valid_email(String un) {
		driver.findElement(LG.username).sendKeys(un);
	}
	@Then("^password \"([^\"]*)\"$")
	public void password(String pwd) {
		driver.findElement(LG.pasword).sendKeys(pwd);
	}
	@Then("^click on Login button$")
	public void click_on_Login_button() {
	driver.findElement(LG.loginButton).click();
	}
	
	//Scenario Outline:Validate Broker Dashboard
	@Given("^Broker is on dashboard$")
	public void broker_is_on_dashboard() throws InterruptedException {
		Thread.sleep(2000);
	}

	@When("^Broker navigated to DashBoard$")
	public void broker_navigated_to_DashBoard() {
		String titlepage = driver.getTitle(); 
		System.out.println("Title of dashboard =" + titlepage);
	}

	@Then("^Broker has to click on button$")
	public void broker_has_to_click_on_button()  {
	    driver.findElement(LG.application).click();
	}

	@Then("^Broker has select \"([^\"]*)\"$")
	public void broker_has_select(String bt){
	    driver.findElement(LG.borrowerType).click();
	}

	@When("^Broker navigated to \"([^\"]*)\"$")
	public void broker_navigated_to(String arg1)  {
	  String page =driver.getTitle();
	 System.out.println("Title of dip page="+page);
	}

	@Then("^Broker should select type \"([^\"]*)\"$")
	public void broker_should_select_type(String arg1)  {
	   driver.findElement(LG.select).click();
	}

	@Then("^Broker navigats to DIP$")
	public void broker_navigats_to_DIP() throws InterruptedException  {
		Thread.sleep(3000);
		driver.findElement(LG.type1).click();
	}

	@Then("^Broker should click \"([^\"]*)\"$")
	public void broker_should_click(String arg1)  {
		driver.findElement(LG.save).click();
		driver.findElement(LG.complete).click();
	}
	
	//Scenario Outline:Validate the applicant’s company
	@Given("^Broker is on company details page$")
	public void broker_is_on_company_details_page() {
		System.out.println("current screen="+driver.getTitle());
	}
	
	@Then("^Broker has to provide \"([^\"]*)\" or  \"([^\"]*)\"$")
	public void broker_has_to_provide_or(String cm, String arg2) throws InterruptedException {
		driver.findElement(CD.company_name).sendKeys(cm);
		driver.findElement(CD.search).click();
		Thread.sleep(2000);
		driver.findElement(CD.list_company).click();
	}
	
	@When("^Broker verifed companyName$")
	public void broker_verifed_companyName() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(CD.correct_company).click();
	}
	
	@Then("^Broker has to provide \"([^\"]*)\"$")
	public void broker_has_to_provide(String name) {
		driver.findElement(CD.applicants_name).sendKeys(name);
	}
	
	@Then("^\"([^\"]*)\" on email feild$")
	public void on_email_feild(String email) {
		driver.findElement(CD.email).sendKeys(email);
	}
	
	@Then("^\"([^\"]*)\" on mobile feild$")
	public void on_mobile_feild(String mobile) {
		driver.findElement(CD.mobile).sendKeys(mobile);
	}
	
	@Then("^Broker click on \"([^\"]*)\"$")
	public void broker_click_on(String arg1) {
		driver.findElement(CD.submit).click();
	}
	
	//Scenario Outline:Validate Product details
	@Given("^Broker is on Product details page$")
	public void broker_is_on_Product_details_page() {
		System.out.println("title of current screen="+driver.getTitle());
	}
	@Then("^Broker has to select \"([^\"]*)\" value$")
	public void broker_has_to_select_value(String amount) {
		driver.findElement(PD.estimated_value).sendKeys(amount);
	}
	@Then("^Broker has to provide \"([^\"]*)\" in field$")
	public void broker_has_to_provide_in_field(String address) {
		driver.findElement(PD.address).sendKeys(address);
		driver.findElement(PD.address_value).click();
	}
	@When("^Broker navigated to Property Type$")
	public void broker_navigated_to_Property_Type() {
		
	}
	@Then("^Broker should select \"([^\"]*)\"$")
	public void broker_should_select(String prop) {
		Select select = new Select(driver.findElement(PD.property));
		select.selectByVisibleText(prop);
	}
	@Then("^Broker has to select \"([^\"]*)\"$")
	public void broker_has_to_select(String arg1) {
		driver.findElement(PD.freehold).click();
	}
	@When("^Broker navigated to propertybuilt$")
	public void broker_navigated_to_propertybuilt() {
		driver.findElement(PD.year).click();
	}
	@Then("^Broker has to provide \"([^\"]*)\" in year$")
	public void broker_has_to_provide_in_year(String year) {
		driver.findElement(PD.year).sendKeys(year);
	}
	@Then("^Broker has to select \"([^\"]*)\" type$")
	public void broker_has_to_select_type(String loan) {
		driver.findElement(PD.purposeLoan).click();
	}
	
	//Scenario Outline:Validate Borrowing needs details
	@Given("^Broker is on Borrowing needs$")
	public void broker_is_on_Borrowing_needs() {
		
	}
	@Then("^Broker has to provide amount \"([^\"]*)\"$")
	public void broker_has_to_provide_amount(String amt) {
		driver.findElement(PD.amount).sendKeys(amt);
	}
	@Then("^select \"([^\"]*)\" from list$")
	public void select_from_list(String product) {
		driver.findElement(PD.product).click();
	}
	@Then("^select \"([^\"]*)\" from dropdown$")
	public void select_from_dropdown(String year2) {
		driver.findElement(PD.year2).sendKeys(year2);
	}
	@Then("^select \"([^\"]*)\" from month$")
	public void select_from_month(String month) {
		driver.findElement(PD.month).sendKeys(month);
	}
	@Then("^select \"([^\"]*)\" balance$")
	public void select_balance(String balance) {
		driver.findElement(PD.balance).click();
	}
	@Then("^clicks on \"([^\"]*)\" button$")
	public void clicks_on_button(String arg1) {
		driver.findElement(PD.save).click();
	}
	
	//Scenario Outline:validate for Affordability
	@Given("^Broker is on  Affordability page$")
	public void broker_is_on_Affordability_page() {
		
	}
	@Then("^Broker has to provide year \"([^\"]*)\"$")
	public void broker_has_to_provide_year(String turnover) {
		driver.findElement(AF.turnover).sendKeys(turnover);
	}
	@Then("^last three year \"([^\"]*)\"$")
	public void last_three_year(String ebit) {
		driver.findElement(AF.ebit).sendKeys(ebit);
	}
	@Then("^click on button$")
	public void click_on_button() {
		driver.findElement(AF.button).click();
	}
	
	//Scenario Outline:validate Summary page
	@Given("^Broker has to validate summary page$")
	public void broker_has_to_validate_summary_page() {
		
	}
	@Then("^click on save$")
	public void click_on_save() {
		driver.findElement(SS.summary).click();
		System.out.println(driver.findElement(SS.id).getAttribute("value"));
	}
	@Then("^click on dashboard$")
	public void click_on_dashboard() {
		driver.findElement(SS.thanku).click();;
	}
	
}
