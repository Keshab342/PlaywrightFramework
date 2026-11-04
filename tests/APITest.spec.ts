import {test,expect} from "@playwright/test"

test("@TestGetRequest  Test first API",async({request})=>{

const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
expect(response.status()).toBe(200);
const formatted_response = await response.json();
console.log(formatted_response);
expect(formatted_response.userId).toBe(1);

})

test("@TestPostRequest  Test Post API",async({request})=>{

let payload = {
    title: 'Post Request',
    body: 'Username: TestUser'
    
  }
const response = await request.post("https://jsonplaceholder.typicode.com/posts/", { data: payload });
expect(response.status()).toBe(201);
const formatted_response = await response.json();
console.log(formatted_response);
let id=formatted_response.id;
const get_response = await request.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
expect(get_response.status()).toBe(200);
const getFormatted_response = await get_response.json();
expect(getFormatted_response.title).toBe(payload.title);
expect(getFormatted_response.body).toBe(payload.body);

})

test("@TestPatchRequest  Test Patch API",async({request})=>{

let payload = {
    title: 'Post Request',
    body: 'Username: TestUser'
    
  }
const response = await request.patch("https://jsonplaceholder.typicode.com/posts/1", { data: payload });
expect(response.status()).toBe(200);
const get_response = await request.get(`https://jsonplaceholder.typicode.com/posts/1`);
expect(get_response.status()).toBe(200);
const getFormatted_response = await get_response.json();
expect(getFormatted_response.title).toBe(payload.title);
expect(getFormatted_response.body).toBe(payload.body);

})

test("@TestPutRequest  Test Put API",async({request})=>{

let payload = {
    title: 'Put Request',
    body: 'Username: TestUser',
    userId: 1
    
  }
const response = await request.put("https://jsonplaceholder.typicode.com/posts/1", { data: payload });
expect(response.status()).toBe(200);
const get_response = await request.get(`https://jsonplaceholder.typicode.com/posts/1`);
expect(get_response.status()).toBe(200);
const getFormatted_response = await get_response.json();
expect(getFormatted_response.title).toBe(payload.title);
expect(getFormatted_response.body).toBe(payload.body);

})

test("@TestDeleteRequest  Test Delete API",async({request})=>{

const response = await request.delete("https://jsonplaceholder.typicode.com/posts/1",{
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'your-api-key' // Replace with
      },
      params:{
        limit:10
      }
});
expect(response.status()).toBe(204);

})
