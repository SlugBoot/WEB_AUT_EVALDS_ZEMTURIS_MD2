import { BasePage } from "./basePage";

export class healthPage extends BasePage {
  static get makeAppointmentButton() {
    return cy.get("#btn-make-appointment");
  }

  static get usernameInput() {
    return cy.get("input#txt-username");
  }

  static typeDemoUsername() {
    let username;

    cy.get("input[aria-describedby='demo_username_label']")
      .invoke('attr', 'value')
      .then((value) => {
        username = value;
        this.usernameInput.type(username);
      })
  }

  static get passwordInput() {
    return cy.get("input#txt-password");
  }

  static typeDemoPassword() {
    let password;

    cy.get("input[aria-describedby='demo_password_label")
      .invoke('attr', 'value')
      .then((value) => {
        password = value;
        this.passwordInput.type(password);
      })
  }

  static get loginButton() {
    return cy.get("#btn-login");
  }

  static get facilityMenu() {
    return cy.get("select#combo_facility")
  }

  static get hospitalReadmissionCheckbox() {
    return cy.get("input#chk_hospotal_readmission");
  }

  static get MedicaidRadioButton() {
    return cy.get("input#radio_program_medicaid");
  }

  static get dateInput() {
    return cy.get("input#txt_visit_date");
  }

  static get datePicker() {
    return cy.get("div.datepicker-days");
  }

  static get commentInput() {
    return cy.get("textarea#txt_comment");
  }

  static get bookAppointmentButton() {
    return cy.get("#btn-book-appointment");
  }

  static get facilityInfo() {
    return cy.get("p[id='facility']");
  }

  static get readmissionInfo() {
    return cy.get("p[id='hospital_readmission']");
  }

  static get programInfo() {
    return cy.get("p[id='program']");
  }

  static get visitDateInfo() {
    return cy.get("p[id='visit_date']");
  }

  static get commentInfo() {
    return cy.get("p[id='comment']");
  }

  static get hamburgerMenuToggle() {
    return cy.get("a[id='menu-toggle']");
  }

  static get hamburgerMenu() {
    return this.hamburgerMenuToggle.parent().find("nav[id='sidebar-wrapper']");
  }

  static get hamburgerHistory() {
    return this.hamburgerMenu.find("a[href='history.php#history']");
  }

  static get appointments() {
    return cy.get("div.col-sm-12.text-center").find("p");
  }
}
