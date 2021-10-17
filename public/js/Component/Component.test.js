describe("Given a component class", () => {
  describe("When it receives a div container, a 'testing' class and a 'ul' tag", () => {
    test("Then it should render a ul element with a 'testing' class inside the div container", () => {
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
