import { healthPage } from "../pageObjects/healthPage"

describe('MD_2 spec', () => {
  context('MD_2 tests', () => {
    beforeEach(() => {
      healthPage.visit();
    });


    it('Scenario 1 - Make an appointment', () => {
      // Click Make Appointment button
      healthPage.makeAppointmentButton.click();

      // Input Demo User Credentials
      healthPage.typeDemoUsername();
      healthPage.typeDemoPassword();

      // Click Login Button
      healthPage.loginButton.click();

      //Set following values
      //Facility - Seoul CURA Healthcare Center
      healthPage.facilityMenu.select("Seoul CURA Healthcare Center");
      //Check - Apply for hospital readmission
      healthPage.hospitalReadmissionCheckbox.check();
      //Select - Medicaid
      healthPage.MedicaidRadioButton.click();
      //Set Date value by using the widget - 30
      //Open Dropdown
      healthPage.dateInput.click();
      //Set value
      healthPage.datePicker.find("table tbody tr td").contains("30").click();
      //Close Dropdown / Click elsewhere (covers next input)
      cy.get("div h2").click();
      //Set comment - CURA Healthcare Service
      healthPage.commentInput.type("CURA Healthcare Service");
      // Click Book Appointment button
      healthPage.bookAppointmentButton.click();

      // Validate data
      healthPage.facilityInfo.should("have.text", "Seoul CURA Healthcare Center");
      healthPage.readmissionInfo.should("have.text", "Yes");
      healthPage.programInfo.should("have.text", "Medicaid");
      healthPage.visitDateInfo.should("contain.text", "30");
      healthPage.commentInfo.should("have.text", "CURA Healthcare Service");
    });

    it("Scenario 2 - Appointment history empty", () => {

      // Click Make Appointment button
      healthPage.makeAppointmentButton.click();

      // Input Demo User Credentials
      healthPage.typeDemoUsername();
      healthPage.typeDemoPassword();

      // Click Login button
      healthPage.loginButton.click();

      // Click Hamburger Menu Toggle
      healthPage.hamburgerMenuToggle.click();

      // Validate that sidebar is active
      healthPage.hamburgerMenu.should("have.class", "active");

      // Select History
      healthPage.hamburgerHistory.click();

      // Validate that "No Appointment" is visible
      healthPage.appointments.should("have.text", "No appointment.");
    });
  })
})
