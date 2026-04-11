describe('user API tests', () =>{
    let userId;
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

    it('ChangeUser', ()=>{
        cy.request({
            method: "POST",
            url: "http://localhost:8080/users/",
            body: {
                "id": 0,
                "firstName": "Тест",
                "surName": "Тестов"
            }
        }).then((response) =>{
            expect(response.status).to.equal(200);
            userId = response.body.id;
            return cy.request({
            method: "PUT",
            url: `http://localhost:8080/users/${userId}`,
            body: {
                id: userId,
                firstName: "Имя 0",
                surName: "Фамилия 0"
            }
        })}).then((response) =>{
            cy.log('Status:', response.status);
            // cy.log('Body:', JSON.stringify(response.body));
            expect(response.status).to.equal(200);
            expect(response.body.firstName).to.equal("Имя 0");
        })
    });
    
    it('createAndDeleteUser', ()=>{
        cy.request({
            method: "POST",
            url: "http://localhost:8080/users/",
            body: {
            "id": 0,
            "firstName": "Тест2",
            "surName": "Тестов2"
            }
        }).then((response) =>{
            expect(response.status).to.equal(200);
            userId = response.body.id;
            return cy.request({
            method: "DELETE",
            url: `http://localhost:8080/users/${userId}`,
            failOnStatusCode: false
            }).then((response) =>{
                expect(response.status).to.equal(200);
        })});
    });
})