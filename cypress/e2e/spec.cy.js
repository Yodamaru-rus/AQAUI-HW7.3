describe('user API tests', () =>{
    it('createUser', ()=>{
        cy.request({
            method: "POST",
            url: "http://localhost:8080/users",
            body: {
                "id": 0,
                "firstName": "Тест",
                "surName": "Тестов"
            }
        }).then((response) =>{
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.equal(200);
        })
    });

    it('createUser', ()=>{
        cy.request({
            method: "PUT",
            url: "http://localhost:8080/users/0",
            headers: { 'Content-Type': 'application/json' },
            body: {    
                id: 0,
                firstName: "Имя 0",
                surName: "Фамилия 0"
            },
            failOnStatusCode: false
        }).then((response) =>{
            cy.log('Status:', response.status);
            // cy.log('Body:', JSON.stringify(response.body));
            expect(response.status).to.equal(200);
            expect(response.body.firstName).to.equal("34");
        })
    });
    
    it('createUser', ()=>{
        cy.request({
            method: "DELETE",
            url: "http://localhost:8080/users/10",
            failOnStatusCode: false
        }).then((response) =>{
            expect(response.status).to.equal(200);
        })
    });

    it('createUser', ()=>{
        cy.request({
            method: "GET",
            url: "http://localhost:8080/users/0",
            failOnStatusCode: false
        }).then((response) =>{
            cy.log('Body:', JSON.stringify(response.body));
            expect(response.status).to.equal(200);
        })
    });
})