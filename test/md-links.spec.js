import {mdLinks} from '../module-read.js';
const path = 'hola.md';
const validateOption = ' ';
const validateOptionTwo = '--validate';


describe('mdLinks', () => {
  it('shoud be a function', () => {
    expect(typeof (mdLinks)).toBe('function');
  });
});


test('debería retornar arreglo de links', ()=> {
  return mdLinks(path, validateOption).then(res => expect(res).toEqual(
      [{
        'href': 'https://www.npmjs.com/',
        'raw': 'https://www.npmjs.com/',
        'text': 'https://www.npmjs.com/',
        'tokens': [
          {
            'raw': 'https://www.npmjs.com/',
            'text': 'https://www.npmjs.com/',
            'type': 'text',
          },
        ],
        'type': 'link',
      },
      {
        'href': 'https://www.freecodecamp.org/news',
        'raw': 'https://www.freecodecamp.org/news',
        'text': 'https://www.freecodecamp.org/news',
        'tokens': [
          {
            'raw': 'https://www.freecodecamp.org/news',
            'text': 'https://www.freecodecamp.org/news',
            'type': 'text',
          },
        ],
        'type': 'link',
      },
      {
        'href': 'https://www.npmjs.cl/',
        'raw': 'https://www.npmjs.cl/',
        'text': 'https://www.npmjs.cl/',
        'tokens': [
          {
            'raw': 'https://www.npmjs.cl/',
            'text': 'https://www.npmjs.cl/',
            'type': 'text',
          },
        ],
        'type': 'link',
      },
      ]));
});

test('debería retornar arreglo de links y validar', ()=> {
  return mdLinks(path, [validateOptionTwo]).then(res => expect(res).toEqual([
    {
      'href': 'https://www.npmjs.com/',
      'raw': 'https://www.npmjs.com/',
      'response': 'OK',
      'status': 200,
      'text': 'https://www.npmjs.com/',
      'tokens': [
        {
          'raw': 'https://www.npmjs.com/',
          'text': 'https://www.npmjs.com/',
          'type': 'text',
        },
      ],
      'type': 'link',
    },
    {
      'href': 'https://www.freecodecamp.org/news',
      'raw': 'https://www.freecodecamp.org/news',
      'response': 'OK',
      'status': 200,
      'text': 'https://www.freecodecamp.org/news',
      'tokens': [
        {
          'raw': 'https://www.freecodecamp.org/news',
          'text': 'https://www.freecodecamp.org/news',
          'type': 'text',
        },
      ],
      'type': 'link',
    },
    {
      'href': 'https://www.npmjs.cl/',
      'raw': 'https://www.npmjs.cl/',
      'response': 'fail',
      'status': null,
      'text': 'https://www.npmjs.cl/',
      'tokens': [
        {
          'raw': 'https://www.npmjs.cl/',
          'text': 'https://www.npmjs.cl/',
          'type': 'text',
        },
      ],
      'type': 'link',
    },
  ]));
});
