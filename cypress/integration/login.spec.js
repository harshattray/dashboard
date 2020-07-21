/**
 * @Author: harsha
 * @Date:   2020-07-21T12:30:15+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T13:11:57+02:00
 */

describe("Login", () => {
  it("Allow login with User and password", () => {
    cy.visit("http://localhost:3004");
    cy.get("#username").type("secretusername");
    cy.get("#password").type("supersecretpassword");
    cy.get("[data-cy-login-button]").click();
  });

  it("Should fail if username and password dont exist", () => {
    cy.visit("http://localhost:3004");
    cy.get("#username");
    cy.get("#password");
    cy.get("[data-cy-login-button]").should("be.disabled");
  });
  it("Allow login with User and password", () => {
    cy.visit("http://localhost:3004");
    cy.get("#username").type("secretusername");
    cy.get("#password").type("supersecretpassword");
    cy.get("[data-cy-login-button]").click();
    cy.get("[data-cy-view-details=675344]").click();
  });
});
