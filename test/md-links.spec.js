import {mdLinks} from '../module-read.js';
const path = 'hola.md';

const validateOption = ' ';
const validateOptionTwo = '--validate';


describe('mdLinks', () => {
  it('shoud be a function', () => {
    expect(typeof (mdLinks)).toBe('function');
  });
});

// return error
it('should return false if ext file isnot md', () => {
  const md = 'hola.js';
  expect(mdLinks(md, validateOption)).rejects.toThrow('this file is not .md ');
});

it('should return no found links', () => {
  const sinLinks = 'sinLinks.md';
  expect(mdLinks(sinLinks, validateOption)).rejects.toThrow('no links found');
});

test('should return link array', ()=> {
  return mdLinks(path, validateOption).then((res) => expect(res).toEqual(
      [{
        'href': 'https://www.npmjs.com/',
        'text': 'https://www.npmjs.com/',
        'type': 'link',
      },
      {
        'href': 'https://www.freecodecamp.org/news',
        'text': 'https://www.freecodecamp.org/news',
        'type': 'link',
      },
      {
        'href': 'https://www.npmjs.cl/',
        'text': 'https://www.npmjs.cl/',
        'type': 'link',
      },
      ]));
});

test('should return link array and validate', ()=> {
  return mdLinks(path, [validateOptionTwo]).then((res) => expect(res).toEqual([
    {
      'href': 'https://www.npmjs.com/',
      'response': 'OK',
      'status': 200,
      'text': 'https://www.npmjs.com/',
      'type': 'link',
    },
    {
      'href': 'https://www.freecodecamp.org/news',
      'response': 'OK',
      'status': 200,
      'text': 'https://www.freecodecamp.org/news',
      'type': 'link',
    },
    {
      'href': 'https://www.npmjs.cl/',
      'response': 'fail',
      'status': null,
      'text': 'https://www.npmjs.cl/',
      'type': 'link',
    },
  ]));
});
