import { Selector } from 'testcafe';

fixture('Menu - Comprehensive Tests')
    .page('http://localhost:3000');

// ==================== MENU ITEMS TESTS ====================

test('Ham and Cheese item is present', async t => {
    const item = Selector('h3').withText('Ham and Cheese');
    const price = item.parent().parent().find('.item-price');
    
    await t
        .expect(item.exists).ok()
        .expect(price.textContent).eql('£2.95');
});

test('Hummus and Feta item is present', async t => {
    const item = Selector('h3').withText('Hummus and Feta');
    const price = item.parent().parent().find('.item-price');
    
    await t
        .expect(item.exists).ok()
        .expect(price.textContent).eql('£3.95');
});

test('Egg classic item is present', async t => {
    const item = Selector('h3').withText('Egg classic');
    const price = item.parent().parent().find('.item-price');
    
    await t
        .expect(item.exists).ok()
        .expect(price.textContent).eql('£1.95');
});

test('Chicken wrap item is present', async t => {
    const item = Selector('h3').withText('Chicken wrap');
    const price = item.parent().parent().find('.item-price');
    
    await t
        .expect(item.exists).ok()
        .expect(price.textContent).eql('£1.95');
});

// ==================== SOUPS TESTS ====================

test('Carrot and coriander soup is present', async t => {
    const item = Selector('h3').withText('Carrot and coriander');
    const price = item.parent().parent().find('.item-price');
    
    await t
        .expect(item.exists).ok()
        .expect(price.textContent).eql('£2.50');
});

test('Tomato soup is present', async t => {
    const item = Selector('h3').withText('Tomato');
    const price = item.parent().parent().find('.item-price');
    
    await t
        .expect(item.exists).ok()
        .expect(price.textContent).eql('£2.50');
});

// ==================== CONTENT TESTS ====================

test('All item descriptions are present', async t => {
    const descriptions = Selector('.item-description');
    await t.expect(descriptions.count).eql(7);
});

test('Sandwich descriptions are correct', async t => {
    const description = Selector('.item-description').nth(0);
    await t.expect(description.textContent).contains('cheddar cheese');
});

test('Hummus description is correct', async t => {
    const description = Selector('.item-description').nth(1);
    await t.expect(description.textContent).contains('Roasted red pepper');
});

// ==================== STRUCTURE TESTS ====================

test('Menu sections are properly structured', async t => {
    const sections = Selector('.menu-section');
    await t.expect(sections.count).eql(2);
});

test('Section dividers are present', async t => {
    const dividers = Selector('.divider');
    await t.expect(dividers.count).eql(2);
});

test('Heading hierarchy is correct', async t => {
    const h1 = Selector('h1');
    const h2 = Selector('h2');
    const h3 = Selector('h3');
    
    await t
        .expect(h1.count).eql(1)
        .expect(h2.count).eql(2)
        .expect(h3.count).eql(7);
});

test('Item headers have name and price', async t => {
    const itemHeader = Selector('.item-header');
    const itemName = itemHeader.find('.item-name');
    const itemPrice = itemHeader.find('.item-price');
    
    await t
        .expect(itemName.count).eql(7)
        .expect(itemPrice.count).eql(7);
});

// ==================== STYLING TESTS ====================

test('Container exists and is visible', async t => {
    const container = Selector('.container');
    await t
        .expect(container.exists).ok()
        .expect(container.visible).ok();
});

test('Header is styled', async t => {
    const header = Selector('.header');
    await t.expect(header.exists).ok();
});

test('Menu content is styled', async t => {
    const content = Selector('.menu-content');
    await t.expect(content.exists).ok();
});

test('Section headings are h2 elements', async t => {
    const sectionHeadings = Selector('h2');
    
    await t.expect(sectionHeadings.count).eql(2);
});

test('Item names are h3 elements', async t => {
    const itemNames = Selector('h3');
    
    await t.expect(itemNames.count).eql(7);
});

test('All images and links have proper attributes', async t => {
    const images = Selector('img');
    
    // If there are images, they should have alt text
    if (await images.count > 0) {
        await t.expect(images.nth(0).getAttribute('alt')).notEql('');
    }
});
