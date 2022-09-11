import { fixture, Selector } from "testcafe";

const iFrameName = Selector('iframe#mce_0_ifr');
const textArea = Selector('body#tinymce.mce-content-body ');

fixture('iFrame Fixture')
    .page('https://the-internet.herokuapp.com/iframe');

test('iFrame Test', async t => {
    await t
        .switchToIframe(iFrameName)
        .click(textArea)
        .pressKey('ctrl+a delete')
        .typeText(textArea, 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested')
        .expect(textArea.innerText).contains('The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested')
        .switchToMainWindow();
});