import { Selector } from 'testcafe';

fixture('Menu - Simple Tests')
    .page('http://localhost:3000');

test('Page loads with menu title', async t => {
    const menuTitle = Selector('#menu-title');
    await t.expect(menuTitle.textContent).eql('Menu');
});

test('Menu sections exist', async t => {
    const sandwichSection = Selector('h2').withText('Sandwiches and wraps');
    const soupsSection = Selector('h2').withText('Soups');
    
    await t
        .expect(sandwichSection.visible).ok()
        .expect(soupsSection.visible).ok();
});

test('All menu items are displayed (7 total)', async t => {
    const menuItems = Selector('.menu-item');
    await t.expect(menuItems.count).eql(7);
});

test('Prices are shown correctly', async t => {
    const prices = Selector('.item-price');
    
    await t
        .expect(prices.nth(0).textContent).eql('£2.95')
        .expect(prices.nth(1).textContent).eql('£3.95');
});

test('Opening hours displayed', async t => {
    const subtitle = Selector('.subtitle');
    await t
        .expect(subtitle.textContent).contains('8am')
        .expect(subtitle.textContent).contains('9pm');
});

test('Page structure is correct', async t => {
    const header = Selector('.header');
    const content = Selector('.menu-content');
    const container = Selector('.container');
    
    await t
        .expect(header.exists).ok()
        .expect(content.exists).ok()
        .expect(container.exists).ok();
});
