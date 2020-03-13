package com.allica.utility;

import org.openqa.selenium.WebDriver;

import com.allica.businessmethod.BrowserConfig;

public class DriverSetup extends BrowserConfig{
	
	public static WebDriver getdriver() {
		return driver;
	}

	public static void  lunchbrowser(String browser) {
		driver = browsersetup("chrome");
	}
}
