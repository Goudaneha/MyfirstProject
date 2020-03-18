package com.allica.StepDefinition;

import org.openqa.selenium.support.ui.Select;
import com.allica.PageObjects.Affordability;
import com.allica.PageObjects.Company_Details;
import com.allica.PageObjects.Login;
import com.allica.PageObjects.Product_Details;
import com.allica.PageObjects.Summary;
import com.allica.utility.CommonMethods;
import com.allica.utility.DriverSetup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	//public static WebDriver driver;
	Product_Details PD = new Product_Details();
	Summary SS = new Summary();
	
	//Scenario Outline:Validate Login to Introducer Portal 
	@Given("^Broker is on HomePage$")
	public void broker_is_on_HomePage() {
		DriverSetup.lunchbrowser();
	}
	@When("^Broker navigats to  HomePage$")
	public void broker_navigats_to_HomePage() {
		System.out.println("Title= "+DriverSetup.getdriver().getTitle());
	}
	@Then("^Broker should select products$")
	public void broker_should_select_products() {
		CommonMethods.clickMethod(Login.IntroducerPortal);
	}
	@Then("^login with valid email \"([^\"]*)\"$")
	public void login_with_valid_email(String un) {
		CommonMethods.sendkeys(Login.username, un);
	}
	@Then("^password \"([^\"]*)\"$")
	public void password(String pwd) {
		CommonMethods.sendkeys(Login.pasword, pwd);
	}
	@Then("^click on Login button$")
	public void click_on_Login_button() {
	CommonMethods.clickMethod(Login.loginButton);
	}
	
	//Scenario Outline:Validate Broker Dashboard
	@Given("^Broker is on dashboard$")
	public void broker_is_on_dashboard() throws InterruptedException {
		Thread.sleep(2000);
	}

	@When("^Broker navigated to DashBoard$")
	public void broker_navigated_to_DashBoard() {
	}

	@Then("^Broker has to click on button$")
	public void broker_has_to_click_on_button()  {
		CommonMethods.clickMethod(Login.application);
	}

	@Then("^Broker has select \"([^\"]*)\"$")
	public void broker_has_select(String bt){
		CommonMethods.clickMethod(Login.borrowerType);
	}

	@When("^Broker navigated to \"([^\"]*)\"$")
	public void broker_navigated_to(String arg1)  {
	}

	@Then("^Broker should select type \"([^\"]*)\"$")
	public void broker_should_select_type(String arg1){
	   CommonMethods.clickMethod(Login.select);
	}

	@Then("^Broker navigats to DIP$")
	public void broker_navigats_to_DIP() throws InterruptedException  {
		CommonMethods.clickMethod(Login.type1);
	}

	@Then("^Broker should click \"([^\"]*)\"$")
	public void broker_should_click(String arg1)  {
		CommonMethods.clickMethod(Login.save);
		CommonMethods.clickMethod(Login.complete);
	}
	
	//Scenario Outline:Validate the applicant’s company
	@Given("^Broker is on company details page$")
	public void broker_is_on_company_details_page() {
		System.out.println("current screen="+DriverSetup.getdriver().getTitle());
	}
	
	@Then("^Broker has to provide \"([^\"]*)\" or  \"([^\"]*)\"$")
	public void broker_has_to_provide_or(String cm, String arg2){
		CommonMethods.sendkeys(Company_Details.company_name, cm);
		CommonMethods.clickMethod(Company_Details.search);
		CommonMethods.clickMethod(Company_Details.list_company);
	}
	
	@When("^Broker verifed companyName$")
	public void broker_verifed_companyName()  {
		CommonMethods.clickMethod(Company_Details.correct_company);
	}
	
	@Then("^Broker has to provide \"([^\"]*)\"$")
	public void broker_has_to_provide(String name) {
		CommonMethods.sendkeys(Company_Details.applicants_name, name);
	}
	
	@Then("^\"([^\"]*)\" on email feild$")
	public void on_email_feild(String email) {
		CommonMethods.sendkeys(Company_Details.email, email);
	}
	
	@Then("^\"([^\"]*)\" on mobile feild$")
	public void on_mobile_feild(String mobile) {
		CommonMethods.sendkeys(Company_Details.mobile,mobile);
	}
	
	@Then("^Broker click on \"([^\"]*)\"$")
	public void broker_click_on(String arg1) { 
		CommonMethods.clickMethod(Company_Details.submit);
	}
	
	//Scenario Outline:Validate Product details
	@Given("^Broker is on Product details page$")
	public void broker_is_on_Product_details_page() {
		System.out.println("title of current screen="+DriverSetup.getdriver().getTitle());
	}
	@Then("^Broker has to select \"([^\"]*)\" value$")
	public void broker_has_to_select_value(String amount) {
		CommonMethods.sendkeys(PD.estimated_value, amount);
	}
	@Then("^Broker has to provide \"([^\"]*)\" in field$")
	public void broker_has_to_provide_in_field(String address) {
		CommonMethods.sendkeys(PD.address, address);
		CommonMethods.clickMethod(PD.address_value);
	}
	@When("^Broker navigated to Property Type$")
	public void broker_navigated_to_Property_Type() {
		
	}
	@Then("^Broker should select \"([^\"]*)\"$")
	public void broker_should_select(String prop) {
	
		Select select = new Select(DriverSetup.getdriver().findElement(PD.property));
		select.selectByVisibleText(prop);
	}
	@Then("^Broker has to select \"([^\"]*)\"$")
	public void broker_has_to_select(String arg1) {
		CommonMethods.clickMethod(PD.freehold);
	}
	@When("^Broker navigated to propertybuilt$")
	public void broker_navigated_to_propertybuilt() {
		CommonMethods.clickMethod(PD.year);
	}
	@Then("^Broker has to provide \"([^\"]*)\" in year$")
	public void broker_has_to_provide_in_year(String year) {
		CommonMethods.sendkeys(PD.year, year);
	}
	@Then("^Broker has to select \"([^\"]*)\" type$")
	public void broker_has_to_select_type(String loan) {
		CommonMethods.clickMethod(PD.purposeLoan);
	}
	
	//Scenario Outline:Validate Borrowing needs details
	@Given("^Broker is on Borrowing needs$")
	public void broker_is_on_Borrowing_needs() {
		
	}
	@Then("^Broker has to provide amount \"([^\"]*)\"$")
	public void broker_has_to_provide_amount(String amt) {
	CommonMethods.sendkeys(PD.amount, amt);
	}
	
	@Then("^select \"([^\"]*)\" from list$")
	public void select_from_list(String product) {
		CommonMethods.clickMethod(PD.product);
	}
	@Then("^select \"([^\"]*)\" from dropdown$")
	public void select_from_dropdown(String year2) {
	CommonMethods.sendkeys(PD.year2, year2);
	}
	@Then("^select \"([^\"]*)\" from month$")
	public void select_from_month(String month) {
	CommonMethods.sendkeys(PD.month, month);
	}
	@Then("^select \"([^\"]*)\" balance$")
	public void select_balance(String balance) {
		CommonMethods.clickMethod(PD.balance);
	}
	@Then("^clicks on \"([^\"]*)\" button$")
	public void clicks_on_button(String arg1) {
		CommonMethods.clickMethod(PD.save);
	}
	
	//Scenario Outline:validate for Affordability
	@Given("^Broker is on  Affordability page$")
	public void broker_is_on_Affordability_page() {
		
	}
	@Then("^Broker has to provide year \"([^\"]*)\"$")
	public void broker_has_to_provide_year(String turnover) {
		CommonMethods.sendkeys(Affordability.turnover, turnover);
	}
	@Then("^last three year \"([^\"]*)\"$")
	public void last_three_year(String ebit) {
	CommonMethods.sendkeys(Affordability.ebit, ebit);
	}
	@Then("^click on button$")
	public void click_on_button() {
	CommonMethods.clickMethod(Affordability.button);
	}
	
	//Scenario Outline:validate Summary page
	@Given("^Broker has to validate summary page$")
	public void broker_has_to_validate_summary_page() {
	}
	@Then("^click on save$")
	public void click_on_save() {
		CommonMethods.clickMethod(SS.summary);
		System.out.println(DriverSetup.getdriver().findElement(SS.id).getAttribute("value"));
	}
	@Then("^click on dashboard$")
	public void click_on_dashboard() {
		CommonMethods.clickMethod(SS.thanku);
	}
}
