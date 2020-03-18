package com.allica.utility;

import org.openqa.selenium.WebDriver;

import com.allica.businessmethod.BrowserConfig;

public class DriverSetup extends BrowserConfig{
	private static WebDriver driver;
	public static WebDriver getdriver() {
		return driver;
	}
	public static void  lunchbrowser() {
		driver = browsersetup("chrome");
	}
}
