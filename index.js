const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

   await driver.get('https://beletate.github.io/asilo-cambui/index.html');
   await driver.findElement(By.className('doacaoStation')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 100000);
   await driver.findElement(By.className('conta-bancaria')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 100000);
   await driver.findElement(By.className('contatoStation')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 100000);
   await driver.findElement(By.className('bazarStation')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 100000);
   await driver.findElement(By.className('eventosStation')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 100000);
   await driver.findElement(By.className('homeStation')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 100000);
   await driver.findElement(By.className('postStation')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 100000);
   await driver.findElement(By.className('doacaoStation')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 100000);
   await driver.findElement(By.className('contatoStation')).click();
   await driver.wait(until.titleIs('Asilo Cambuí'), 100000);
   await driver.quit();
   
})();
