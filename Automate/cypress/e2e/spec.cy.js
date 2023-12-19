describe('ตรวจสอบหน้าหลัก', () => {

  let data;

  beforeEach(() => {
    cy.fixture("example").then(CompanyData => {
      data = CompanyData;
    });
  });


  it('OP1-SC01-TC001 ตรวจสอบการแสดงความถูกต้องของหน้าแรก', () => {
    cy.visit('https://ourpoint.co/').then(() => { //เข้าลิ้งค์สักอย่าง .then คำสั่งให้เช็คแบบต่อเนื่อง
      cy.get(".aos-init.aos-animate[data-aos='fade-right']").should('contain','ระบบสะสมแต้ม')
      cy.get(".aos-init.aos-animate[data-aos='fade-right']").should('contain','สำหรับร้านค้า')
    }) 
  })

  it('OP1-SC01-TC002 คลิ๊กเริ่มต้นใช้งาน ', () => {
    cy.visit('https://ourpoint.co/')
    cy.get('.tools > ul > :nth-child(2)').click()
    cy.get('[style="--vs-color:59,89,152;"] > .vs-button__content').should('be.visible')
    cy.get('[style="--vs-color:222,82,70;"] > .vs-button__content').should('be.visible')
    cy.get('.login-ourpoint-btn > .vs-button > .vs-button__content').should('be.visible')
    cy.get('.register-btn').should('be.visible')
    cy.get('.staff-form > .vs-button > .vs-button__content').should('be.visible')
  })

  it('OP1-SC01-TC003 เข้าสู่ระบบสำหรับพนักงาน ', () => {
    cy.visitRegister()
    cy.get('#vs-input--username').type(data.username) 
    cy.get('#vs-input--25').type(data.password) 
    cy.get('.vs-button__content').click()
    cy.get('.vs-notification').should('contain','ข้อมูลไม่ถูกต้อง')
  })

  it.only('OP1-SC01-TC004 เข้าสู่ระบบสำหรับพนักงาน ', () => {
    cy.visitRegister()
    cy.get('#vs-input--username').type(data.username) 
    cy.get('#vs-input--25').type(data.password) 
    cy.get('.vs-button__content').click()
    cy.get(':nth-child(4) > .menu-item > .menu-title').click()
    cy.get(data.dropdown1).click()
    cy.get(".vs-select__options__content").contains('สาขา : Lazada').click({force: true}).wait(3000)
    cy.logout()
  })
})