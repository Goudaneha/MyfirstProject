package com.allica.PageObjects;

import org.openqa.selenium.By;

public class Product_Details {
 public By estimated_value =By.xpath("//input[@id='estimated_value']");
 public By address= By.xpath("//input[@id='property_address-suggest-address']");
 public By address_value= By.xpath("//p/following::b[contains(text(),'Ignis House')]");
 public By property= By.xpath("//select[@id='property-used']");
 public By property_type =By.xpath("//option[text()='Warehouses']");
 public By freehold = By.xpath("//span[text()='Freehold']");
 public By year =By.xpath("//input[@id='property-age']");
 public By purposeLoan = By.xpath("//span[text()='Capital Raising']");
 public By amount= By.xpath("//input[@id='borrowing-value']");
 public By product = By.xpath("//span[text()='Capital & Interest']");
 public By year2 = By.xpath("//select[@id='date_year']");
 public By month = By.xpath("//select[@id='date_month']");
 public By balance = By.xpath("//span[text()='Added to the loan and deducted at completion']");
 public By save = By.xpath("//button[@form='PROD_DETAILS']");
}
