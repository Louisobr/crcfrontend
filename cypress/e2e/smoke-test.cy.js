describe('Endtoend', () => {
    it('Incrementsdb', () => {
        const testId = 'test-${Date.now()}'
        const url = "https://vnm9i2c79f.execute-api.eu-west-2.amazonaws.com/items/${testId}"
        cy.request('POST', url, {}).then((response1) => {
            expect(response1.status).to.eq(200)
            cy.request('POST', url, {}).then((response2) => {
                expect(response2.status).to.eq(200)
                expect(response2.body).to.eq(response1.body + 1)
        })
        })
    })
})