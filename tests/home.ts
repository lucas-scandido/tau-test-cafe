import { fixture } from "testcafe";
import { Selector } from "testcafe";

fixture('Home Page Validation')
    .page('https://devexpress.github.io/testcafe/example/')

test('Checking Home Page', async t =>{
    await t.expect(Selector('#main-form').withText('Example').exists).ok()
}) 

test('Fill Name', async n =>{
    await n.typeText('#developer-name', 'Lucas')
    await n.click('#populate')
})