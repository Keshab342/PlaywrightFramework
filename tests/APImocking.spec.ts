import {test,expect} from "@playwright/test"

test("@MockAPI  Test first API",async({page})=>{

await page.route("**/posts/1", async route => {
await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({ userId: 1, id: 1, title: 'Mocked Title', body: 'Mocked Body' }),
  });
})

await page.goto("https://jsonplaceholder.typicode.com/posts/1");
await page.pause();


})

test("@AbortAPI  Test Abort API",async({page})=>{

await page.route("**/posts/1", async route => {
await route.abort();
})
await page.goto("https://jsonplaceholder.typicode.com/posts/1");
await page.pause();

})

test("@ModifyAPI  Test Modify API",async({page})=>{

await page.route("**/posts/1", async route => {
    let response = await route.fetch();
    let body = await response.json();
    body.body = "New Modified Body";
await route.fulfill({
    response,
    body: JSON.stringify(body),
  });
})

await page.goto("https://jsonplaceholder.typicode.com/posts/1");
await page.pause();


})
