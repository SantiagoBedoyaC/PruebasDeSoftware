describe ('test suite- pruebas pagina de inicio', function(){	
    /* Prueba para comprar producto */
    it ('comprar producto', function(){	
	cy.visit('https://dracostore.co')
	cy.get('#menu-item-72007 > .menu-link').click()
    cy.get('.post-133611 > .astra-shop-thumbnail-wrap > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain.text', '“Binder: PRO 12-Pocket Zippered Vivid- Aquamarine” se ha añadido a tu carrito.')
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name').type('Santiago')
    cy.get('#billing_last_name').type('Bedoya')
    cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection').click()
    cy.get('#select2-billing_country-results').contains('Colombia').click()       
    cy.get('#billing_address_1').type('Cra 88 #35d36')
    cy.get('#billing_address_2').type('Tecnologico de Antioquia')
    cy.get('#billing_city').type('Medellín')
    cy.get('#billing_state_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection').click()
    cy.get('#select2-billing_state-results').contains('Antioquia').click()
    cy.get('#billing_postcode').type('13114')
    cy.get('#billing_phone').type('+57 (604) 444 37 00')
    cy.get('#billing_email').type('santiago.bedoya4@correo.tdea.edu.co')
    cy.get('#order_comments').type('UWU')
    cy.get('#shipping_method_0_local_pickup6').check()
    cy.get('#payment_method_cod').check()
    cy.get('#terms').check()
	})
    /*Prueba para creacion de cuenta */
    it ('Crear Cuenta', function(){	
        cy.visit('https://dracostore.co')
        cy.get('.ast-header-account').click()
        cy.get('#reg_email').type('santiago.bedoya4@correo.tdea.edu.co')
        cy.get('.woocommerce-Button').click()   
        
        })
        /* Prueba para Inicio de sesion */
    it ('Iniciar Sesion', function(){	
        cy.visit('https://dracostore.co')
        cy.get('.ast-header-account').click()
        cy.get('#username').type('santiago.bedoya4@correo.tdea.edu.co')
        cy.get('#password').type('12345')  
        cy.get('#rememberme').check()
        cy.get(':nth-child(3) > .woocommerce-button').click()
            
        })
})

