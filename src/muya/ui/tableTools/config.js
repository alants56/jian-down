// export const toolList = {
//   left: [{
//     label: 'Insert Row Above',
//     action: 'insert',
//     location: 'previous',
//     target: 'row'
//   }, {
//     label: 'Insert Row Below',
//     action: 'insert',
//     location: 'next',
//     target: 'row'
//   }, {
//     label: 'Remove Row',
//     action: 'remove',
//     location: 'current',
//     target: 'row'
//   }],
//   bottom: [{
//     label: 'Insert Column Left',
//     action: 'insert',
//     location: 'left',
//     target: 'column'
//   }, {
//     label: 'Insert Column Right',
//     action: 'insert',
//     location: 'right',
//     target: 'column'
//   }, {
//     label: 'Remove Column',
//     action: 'remove',
//     location: 'current',
//     target: 'column'
//   }]
// }
export const toolList = {
  left: [{
    label: '下侧插入一行',
    action: 'insert',
    location: 'previous',
    target: 'row'
  }, {
    label: '下侧插入一行',
    action: 'insert',
    location: 'next',
    target: 'row'
  }, {
    label: '移除该行',
    action: 'remove',
    location: 'current',
    target: 'row'
  }],
  bottom: [{
    label: '左侧插入一列',
    action: 'insert',
    location: 'left',
    target: 'column'
  }, {
    label: '右侧插入一列',
    action: 'insert',
    location: 'right',
    target: 'column'
  }, {
    label: '移除该列',
    action: 'remove',
    location: 'current',
    target: 'column'
  }]
}
