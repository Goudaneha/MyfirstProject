package com.allica.businessmethod;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserConfig {
	public static WebDriver driver;
	
	public static WebDriver browsersetup(String browser) {
		if(browser.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver","C://Users//nehaashokj//Downloads//chromedriver_win32//chromedriver.exe");
			driver = new ChromeDriver();
			driver.get("https://web-sit.allica.co.uk");
		}
		return driver;
	}

}
