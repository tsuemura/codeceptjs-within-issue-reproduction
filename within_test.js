Feature('within');

Scenario('can select an element within the element', ({ I }) => {
  I.amOnPage(
    "https://tsuemura.github.io/codeceptjs-within-issue-reproduction/"
  );
  // If you specify locate('tr').withText('Paul')
  // as the first argument of the within,
  // semantic locators should find an element within the element.
  within(locate("tr").withText("Paul"), () => {
    I.click("Reveal");
    I.see("Paul is also a good man");
  });
});
