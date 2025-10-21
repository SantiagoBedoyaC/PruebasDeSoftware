# QA Automation Project – DracoStore E-Commerce 🧪

## 🧭 Overview
This project demonstrates automated end-to-end testing of the **DracoStore** website, an online store that sells trading card games, board games, and related accessories.

The goal of this project was to simulate common user actions such as account creation, login, and purchasing a product, using **Cypress** as the main testing framework.

---

## 🎯 Objectives
- Validate the functionality of essential user flows:
  - Account creation  
  - User login  
  - Product purchase  
- Ensure that checkout elements and success messages display correctly.
- Practice automation testing for real-world web applications with forms and dynamic elements.

---

## 🧰 Tools & Technologies
- **Cypress** – End-to-End Testing Framework  
- **Mocha** – Test Runner (integrated with Cypress)  
- **Node.js**  
- **Google Chrome** (Test Browser)  
- **Visual Studio Code**

---

## 🧪 Test Suite Details
### Suite Name: `test suite - pruebas pagina de inicio`

This test suite includes three automated test cases:

| Test Case | Description | Expected Result |
|------------|-------------|-----------------|
| **Buy Product** | Simulates a complete purchase from homepage to checkout, filling in all billing details. | Product successfully added to cart, checkout completed, and success message displayed. |
| **Create Account** | Automates the account registration process by entering a new email. | Account creation form completes without error. |
| **Login** | Simulates a user login using existing credentials. | User is logged in and redirected to the account dashboard. |

---

## 💻 Code Example
```javascript
describe('test suite - pruebas pagina de inicio', function(){	
  
  /* Test: Buy Product */
  it('comprar producto', function(){	
    cy.visit('https://dracostore.co')
    cy.get('#menu-item-72007 > .menu-link').click()
    cy.get('.post-133611 > .astra-shop-thumbnail-wrap > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message')
      .should('contain.text', '“Binder: PRO 12-Pocket Zippered Vivid- Aquamarine” se ha añadido a tu carrito.')
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    
    // Billing Information
    cy.get('#billing_first_name').type('Santiago')
    cy.get('#billing_last_name').type('Bedoya')
    cy.get('#billing_country_field .select2-selection').click()
    cy.get('#select2-billing_country-results').contains('Colombia').click()
    cy.get('#billing_address_1').type('Cra 88 #35d36')
    cy.get('#billing_city').type('Medellín')
    cy.get('#billing_state_field .select2-selection').click()
    cy.get('#select2-billing_state-results').contains('Antioquia').click()
    cy.get('#billing_postcode').type('13114')
    cy.get('#billing_phone').type('+57 (604) 444 37 00')
    cy.get('#billing_email').type('santiago.bedoya4@correo.tdea.edu.co')
    cy.get('#terms').check()
  })
})
