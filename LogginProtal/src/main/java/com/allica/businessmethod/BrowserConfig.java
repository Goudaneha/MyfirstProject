package com.allica.businessmethod;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserConfig {
	private static WebDriver driver;
	public static BrowserConfig BC;
	
//	public static BrowserConfig getInstence() {
//		if(BC==null) {
//			BC=new BrowserConfig();
//		}
//		return BC;
//	}
	public static WebDriver browsersetup(String browser) {
		if(browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver","C://Users//nehaashokj//Downloads//chromedriver_win32//chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().window().maximize();
		    driver.manage().deleteAllCookies();
		    driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
		    driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
			driver.get("https://web-sit.allica.co.uk");
		}
		return driver;
	}

}
