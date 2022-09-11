import { fixture } from "testcafe";
import { Selector } from "testcafe";

fixture('Home Page Validation')
    .page('https://devexpress.github.io/testcafe/example/');

test('Checking Home Page', async t =>{
    await t.expect(Selector('#main-form').withText('Example').exists).ok();
}) 

test('Filling the Page', async n =>{
    await n.typeText('#developer-name', 'Lucas');
    await n.click('#remote-testing').expect(Selector('#main-form').withText('Support for testing on remote devices').exists).ok();
    await n.click('#reusing-js-code').expect(Selector('#main-form').withText('Re-using existing JavaScript code for testing').exists).ok();
    await n.click('#background-parallel-testing').expect(Selector('#main-form').withText('Running tests in background and/or in parallel in multiple browsers').exists).ok();
    await n.click('#continuous-integration-embedding').expect(Selector('#main-form').withText('Easy embedding into a Continuous integration system').exists).ok();
    await n.click('#traffic-markup-analysis').expect(Selector('#main-form').withText('Advanced traffic and markup analysis').exists).ok();
    await n.click('#tried-test-cafe').expect(Selector('#tried-section').withText('I have tried TestCafe').exists).ok();
    await n.click('#windows').expect(Selector('#main-form').withText('Windows').exists).ok();
    await n.click('#preferred-interface').wait(1000)
    await n.click('#preferred-interface >  option:nth-child(1)').expect(Selector('#main-form').withText('Command Line').exists).ok();
    // await n.click('#main-form > #slider-value-active > div:nth-child(10)');
    await n.typeText('#comments', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.')
        .expect(Selector('#main-form').withText('Please let us know what you think:').exists).ok();
    await n.click('#submit-button').wait(5000);
    await n.expect(Selector('#article-header').withText('Thank you, Lucas!').exists).ok();
});