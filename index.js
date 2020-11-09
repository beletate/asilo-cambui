const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {

    /* await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    
    await driver.findElement(By.className('LC20lb DKV0Md')).click();
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    
 */
    await driver.get('https://beletate.github.io/asilo-cambui/index.html');
    
    
  } finally {
    await driver.quit();
  }
})();


/* 
await driver.findElement(By.name('a')).sendKeys('webdriver', Key.RETURN);


await driver.wait(until.titleIs('webdriver - Google Search'), 1000);



var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
.withCapabilities(webdriver.Capabilities.chrome())
.build();

(async function example() {
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})(); */