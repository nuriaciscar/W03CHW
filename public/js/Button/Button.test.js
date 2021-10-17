describe("Given a Button class", () => {
  describe("When it receives ", () => {
    test("Then it should render ", () => {
      // Arrange
      const container = document.createElement("div");
      const className = "testing";
      const tag = "ul";

      // Act
      new Component(container, className, tag);
      console.log(container.querySelector("ul.testing"));
      const ulFound = container.querySelector("ul.testing");

      // Assert
      expect(ulFound).not.toBeNull();
    });
  });
});
