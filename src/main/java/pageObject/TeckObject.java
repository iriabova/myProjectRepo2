package pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import newCore.Base;

public class TeckObject extends Base {
	
	public TeckObject() {
		PageFactory.initElements(driver, this);

}
	@FindBy(how=How.XPATH, using="//a[text()= 'Test Environment']")
	private WebElement testEnvironmentLink;
	
	public void clickOnTestEnvironment() {
		testEnvironmentLink.click();
	}
	
}