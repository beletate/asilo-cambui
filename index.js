const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

    /* await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    
    
    */
   await driver.get('https://beletate.github.io/asilo-cambui/index.html');
   await driver.findElement(By.className('doacaoStation')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 5000);
   await driver.findElement(By.className('conta-bancaria')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 5000);
   await driver.findElement(By.className('contatoStation')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 5000);
   await driver.findElement(By.className('bazarStation')).click();
   await driver.findElement(By.className('btn success')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 5000);
   await driver.findElement(By.className('eventosStation')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 5000);
   driver.execute_script("window.scrollTo(0, 600)") 
   driver.execute_script("window.scrollTo(0, 0)") 
   
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