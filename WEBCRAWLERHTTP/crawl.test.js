const {normalizeURL, getURLsFromHTML} = require("./crawl");
const {test, expect } = require('@jest/globals')

test('normalizeURL ', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    console.log(actual)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)


})

test('normalizeURL strip protocol', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    console.log(actual)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)


})
test('normalizeURL strip trailing slash', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    console.log(actual)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)


})

test('normalizeURL capitals', () => {
    const input = 'https://BLOG.boot.dev/path/'
    const actual = normalizeURL(input)
    console.log(actual)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)


})

test('normalizeURL strip http ', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    console.log(actual)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)


})




