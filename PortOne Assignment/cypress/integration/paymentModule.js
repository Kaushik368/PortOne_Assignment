///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>

var nam="Kaushik Biswas";

describe('Payment Module PortOne', () => {

    // The below url will run before each test
    beforeEach(function(){
        cy.visit('https://www.stage-page.portone.cloud/portOneGlobalPage');
    })

    //To verify the presence of the Language selection dropdown on the Payment details page.
    it('TC001', () => {
      
        cy.xpath("//div[@id='mySelect']").should("have.text"," Tiếng Việt").screenshot({ capture:"fullPage",padding:50 });
    });

    //To validate the functionality of the Language selection dropdown on the Payment details page.
    it('TC002', () => {
        
        cy.xpath("//div[@id='mySelect']").click();
        cy.contains("English").click();
        cy.xpath("//div[@id='mySelect']").should("have.text"," English").screenshot({ capture:"fullPage",padding:50 });
    });

    //To verify the presence of all the Social media handles on the Payment details page.
    it('TC003', () => {
       
        cy.contains('Share This On:').should("have.text","Share This On:").screenshot({ capture:"fullPage",padding:60 });
    });

    //To verify the presence of all the Contact details on the Payment details page.
    it('TC004', () => {
      
        cy.contains('Contact Us').screenshot({ capture:"fullPage",padding:80 });
        cy.xpath('//h6[@class="MuiTypography-root MuiTypography-h6 jss16 css-14f8tbp"]//h6[1]').should("have.text"," testuserchai@gmail.com") 
    });

    //To verify the presence of the Payment Page Docs on the Payment details page.
    it('TC005', () => {
        
        cy.xpath("//img[@alt='chaiicon']").screenshot({ capture:"fullPage",padding:100 });
    });

    //To validate the functionality of the PaymentPage Docs link on the Payment details page.
    it('TC006', () => {

        cy.xpath('//*[@href="https://www.docs.portone.cloud/docs"]').should("have.text"," Payment pages docs ").click();
        cy.wait(5000);
        cy.xpath("//nav[@class='navbar navbar--fixed-top']").screenshot({capture:"fullPage",padding:300});
        cy.go("back");
    });

    //To verify the presence of the Payment Details Form on the Payment details page.
    it('TC007', () => {
     
        cy.get(".css-vifbhv").screenshot({ capture:"fullPage",padding:60 }); 
    });

    //To validate the functionality of the Payment Details Form on the Payment details page.
    it('TC008', () => {
       
        cy.xpath("//div[@id='mySelect']").click();
        cy.contains("English").click();
        cy.get("#amount").click().type("15000");
        cy.xpath("//input[@id='2R5s8kRxgWmnOa62FsVfHa7mQog']").click().type(nam);
        cy.xpath("//input[@id='2R5s8gTLnMViCb1izrbpOb6LpQJ']").click().type("kaubis368@gmail.com");
        cy.get(".selected-flag").click();
        cy.contains("India").click();
        cy.xpath("//input[@id='2R5s8eI56kojIqXqlHsVj4NphfE']").click().type("9284734835");
        cy.xpath("//div[@id='2R5s8kFBsF2cD52JTyCjU34Lvcj']").click();
        cy.contains("Yes").click();
        cy.get(".css-vifbhv").screenshot({ capture:"fullPage",padding:60 });
        cy.xpath("//button[@type='button']").click();
        cy.wait(3000);

//TC-009
        // To verify the presence of the Language selection dropdown on the Payment Options Page / Cart page.
        cy.reload(true);
        cy.wait(3000);
        cy.xpath("(//span[@class='selected-lang-name'][contains(text(),'Tiếng Việt(VI)')])[2]").should("have.text","Tiếng Việt(VI)").screenshot({ capture:"fullPage",padding:50 });

//TC-010
        //To validate the functionality of the Language selection dropdown on the Payment Options Page / Cart page.
        cy.xpath("(//span[@class='selected-lang-name'][contains(text(),'Tiếng Việt(VI)')])[2]").click({force: true});
        cy.contains("English(EN)").click({force: true});
        cy.xpath("(//span[@class='selected-lang-name'][normalize-space()='English(EN)'])[2]").screenshot({ capture:"fullPage",padding:50 })

//TC-011
        //To verify the presence of the customer's information on the Payment Options Page / Cart page.
        cy.get("#defaultAddressName").should("have.text",nam).screenshot({ capture:"fullPage",padding:50 });

//TC-012
        //To verify the presence of the Wallet option on the Payment Options Page / Cart page.
        cy.get("#walletlang").click();
        cy.get("label[for='ZALOPAY-ZALOPAY_WALLET']").click().screenshot({ capture:"fullPage",padding:300 });
        cy.get("#walletlang").click();

//TC-013
        //To verify the presence of the BNPL option on the Payment Options Page / Cart page.
        cy.get("#bnpllang").click();
        cy.get("label[for='KREDIVO-KREDIVO_BNPL']").click().screenshot({ capture:"fullPage",padding:200 });
        cy.get("#bnpllang").click();

//TC-014
        //To verify the presence of the Direct Bank Transfer option on the Payment Options Page / Cart page.
        cy.get("#directbanktransferlangDirect").click().screenshot({ capture:"fullPage",padding:300 });
        cy.get("#directbanktransferlangDirect").click()

//TC-015
        //To verify the presence of the Credit/Debit Card option on the Payment Options Page / Cart page.
        cy.get("#creditdebitcardlangDirect").click().screenshot({ capture:"fullPage",padding:50 });

//TC-016
        //To validate the functionality of the Credit/Debit Card option on the Payment Options Page / Cart page.
        cy.get("#creditdebitcardlangDirect").click().screenshot({ capture:"fullPage",padding:300 });
        cy.get("#PayNowButtonWeb").click();
        cy.wait(3000);
        cy.get("h1[class='hidden-xs']").should("have.text","Order");  

//TC-017
        //To verify the presence of the Payment Information Form on the Order Page / AppotaPay page.
        cy.get(".bill-form").screenshot({ capture:"fullPage",padding:300 });
        
//TC-018
        //To validate the functionality of the Payment Information form on the Order Page / AppotaPay page.
        cy.get("#card_number").click().type("4444444444444444");
        cy.get("#card_name").click().type(nam);
        cy.get("#card_date").click().type("01/24");
        cy.get("#cvv").click().type("123").screenshot({ capture:"fullPage",padding:50 });
        cy.get("#btn-submit").click({force: true});
        cy.wait(3000);
        // cy.get("#content_error").should("have.text","Incorrect payment information").screenshot({ capture:"fullPage",padding:50 });


    });


    
});