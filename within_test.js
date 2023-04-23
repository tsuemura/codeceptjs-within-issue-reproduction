Feature('within');

Scenario('can select an element within the element', ({ I }) => {
  I.amOnPage("http://127.0.0.1:8080");
  // If you specify locate('tr').withText('Paul')
  // as the first argument of the within,
  // semantic locators should find an element within the element.
  within(locate("tr").withText("Paul"), () => {
    I.click("Reveal");
    I.see("Paul is also a good man");
  });
});
