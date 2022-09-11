import { fixture } from "testcafe";

fixture('Home Page Validation')
    .page('https://devexpress.github.io/testcafe/example/');

test('Navigate Test', async t => {
    await t.navigateTo('https://www.google.com');
});