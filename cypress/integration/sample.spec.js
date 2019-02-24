describe('PM Tests', function () {
  before(() => {
    cy.visit('/')
    cy.window().trigger('mousemove', { clientX: 366, clientY: 268 })
  })

  it('rotatex', function () {
    cy.get('.rotatex').should('have.attr', 'style', 'transform: perspective(100px) rotateX(0.604167deg);')
  })
  it('rotatey', function () {
    cy.get('.rotatey').should('have.attr', 'style', 'transform: perspective(100px) rotateY(-0.928258deg);')
  })
  it('translatex', function () {
    cy.get('.translatex').should('have.attr', 'style', 'transform: perspective(100px) translateX(-0.928258px);')
  })
  it('translatey', function () {
    cy.get('.translatey').should('have.attr', 'style', 'transform: perspective(100px) translateY(-0.604167px);')
  })
})