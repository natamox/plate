import { AutoformatRule, ELEMENT_DEFAULT } from '@udecode/plate';
import { formatText } from './_utils';

export const mathSubscriptNumbers: AutoformatRule[] = [
  {
    type: ELEMENT_DEFAULT,
    mode: 'block',
    markup: '~',
    trigger: '0',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '₀'),
  },
  {
    type: ELEMENT_DEFAULT,
    mode: 'block',
    markup: '~',
    trigger: '1',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '₁'),
  },
  {
    type: ELEMENT_DEFAULT,
    mode: 'block',
    markup: '~',
    trigger: '2',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '₂'),
  },
  {
    type: ELEMENT_DEFAULT,
    mode: 'block',
    markup: '~',
    trigger: '3',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '₃'),
  },
  {
    type: ELEMENT_DEFAULT,
    mode: 'block',
    markup: '~',
    trigger: '4',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '₄'),
  },
  {
    type: ELEMENT_DEFAULT,
    mode: 'block',
    markup: '~',
    trigger: '5',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '₅'),
  },
  {
    type: ELEMENT_DEFAULT,
    mode: 'block',
    markup: '~',
    trigger: '6',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '₆'),
  },
  {
    type: ELEMENT_DEFAULT,
    mode: 'block',
    markup: '~',
    trigger: '7',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '₇'),
  },
  {
    type: ELEMENT_DEFAULT,
    mode: 'block',
    markup: '~',
    trigger: '8',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '₈'),
  },
  {
    type: ELEMENT_DEFAULT,
    mode: 'block',
    markup: '~',
    trigger: '9',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '₉'),
  },
];

export const mathSubscriptSymbols: AutoformatRule[] = [
  {
    type: ELEMENT_DEFAULT,
    mode: 'block',
    markup: '~',
    trigger: '+',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '₊'),
  },
  {
    type: ELEMENT_DEFAULT,
    mode: 'block',
    markup: '~',
    trigger: '-',
    insertTrigger: false,
    triggerAtBlockStart: false,
    format: (editor) => formatText(editor, '₋'),
  },
];
