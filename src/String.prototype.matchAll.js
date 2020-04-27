const str = "namename1name2name3"
const regex = /na(me)(\d?)/g

console.log([...str.match(regex)]) // [ 'name', 'name1', 'name2', 'name3' ]
console.log([...str.matchAll(regex)])
/* 
[
  [
    'name',
    'me',
    '',
    index: 0,
    input: 'namename1name2name3',
    groups: undefined
  ],
  [
    'name1',
    'me',
    '1',
    index: 4,
    input: 'namename1name2name3',
    groups: undefined
  ],
  [
    'name2',
    'me',
    '2',
    index: 9,
    input: 'namename1name2name3',
    groups: undefined
  ],
  [
    'name3',
    'me',
    '3',
    index: 14,
    input: 'namename1name2name3',
    groups: undefined
  ]
]
*/
