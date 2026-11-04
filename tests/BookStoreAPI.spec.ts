import {test,expect} from "@playwright/test"

test("@MockBookStoreAPI100  Test first API",async({page})=>{

await page.route("**/BookStore/BookStoreV1BooksPost/9781449331818", async route => {
await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({
      "isbn": "9781449331818",
      "title": "Learning JavaScript Design Patterns",
      "subTitle": "A JavaScript and jQuery Developer's Guide",
      "author": "Keshab Mohapatra",
      "publish_date": "2020-06-04T09:11:40.000Z",
      "publisher": "Karunakar Mohapatra",
      "pages": 254,
      "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-da",
      "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
    },),
  });
})

await page.goto("https://bookstore.toolsqa.com/swagger/#/BookStore/BookStoreV1BooksPost/9781449331818");
await page.pause();


})