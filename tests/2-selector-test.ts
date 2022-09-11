import { fixture } from "testcafe";
import { Selector } from "testcafe";

const developerName = Selector('#developer-name');
const remoteTesting = Selector('#remote-testing');
const reusingCode = Selector('#reusing-js-code');
const backgroundTesting = Selector('#background-parallel-testing');
const continuousIntegration = Selector('#continuous-integration-embedding');
const advancedAnalysis = Selector('#traffic-markup-analysis');
const triedTestCafe = Selector('#tried-test-cafe');
const osOption = Selector('#windows');
const interfaceBox = Selector('#preferred-interface');
const preferredInterface = Selector('#preferred-interface >  option:nth-child(1)');
const commentsArea = Selector('#comments');
const submitButton = Selector('#submit-button');
const successMessage = Selector('#article-header');

fixture('Home Page Validation')
    .page('https://devexpress.github.io/testcafe/example/');

test('Checking Home Page', async t => {
    await t.expect(Selector('#main-form').withText('Example').exists).ok();
})

test('Filling the Page', async n => {
    await n.typeText(developerName, 'Lucas');
    await n.click(remoteTesting).expect(Selector('#main-form').withText('Support for testing on remote devices').exists).ok();
    await n.click(reusingCode).expect(Selector('#main-form').withText('Re-using existing JavaScript code for testing').exists).ok();
    await n.click(backgroundTesting).expect(Selector('#main-form').withText('Running tests in background and/or in parallel in multiple browsers').exists).ok();
    await n.click(continuousIntegration).expect(Selector('#main-form').withText('Easy embedding into a Continuous integration system').exists).ok();
    await n.click(advancedAnalysis).expect(Selector('#main-form').withText('Advanced traffic and markup analysis').exists).ok();
    await n.click(triedTestCafe).expect(Selector('#tried-section').withText('I have tried TestCafe').exists).ok();
    await n.click(osOption).expect(Selector('#main-form').withText('Windows').exists).ok();
    await n.click(interfaceBox).wait(1000)
    await n.click(preferredInterface).expect(Selector('#main-form').withText('Command Line').exists).ok();
    // await n.click('#main-form > #slider-value-active > div:nth-child(10)');
    await n.typeText(commentsArea, 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.')
        .expect(Selector('#main-form').withText('Please let us know what you think:').exists).ok();
    await n.click(submitButton).wait(5000);
    await n.expect(Selector(successMessage).withText('Thank you, Lucas!').exists).ok();
});