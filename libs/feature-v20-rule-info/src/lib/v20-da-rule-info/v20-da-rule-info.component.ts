import { Component } from '@angular/core';

@Component({
  selector: 'timesink-v20-da-rule-info',
  templateUrl: './v20-da-rule-info.component.html',
  styleUrls: ['./v20-da-rule-info.component.scss'],
})
export class V20DaRuleInfoComponent {
  tableEmptyHeaders: string[] = [];

  tableDifficuliesRows: string[][] = [
    ['3', 'Trivial, probably not worth rolling'],
    ['4', 'Easy (following a clear and present trail)'],
    ['5', 'Straightforward (convincing the sympathetic)'],
    ['6', 'Standard (most average actions)'],
    ['7', 'Challenging (finding something on short time)'],
    ['8', 'Difficult (convincing an enemy)'],
    ['9', 'Extremely difficult (juggling weapons)'],
  ];

  tableDegreesOfSuccessRows: string[][] = [
    [
      '1',
      'Marginal; you get what you want, but at a cost, with potential consequences or imperfections',
    ],
    [
      '2',
      'Moderate; you get what you want, but with a cost, consequence, or imperfection',
    ],
    ['3', 'Complete; you get what you want within reason'],
    ['4', 'Exceptional; you get what you want, beyond expectations'],
    [
      '5',
      'Phenomenal; you perform with perfection, or you’ve created lasting greatness',
    ],
  ];

  tableFrenzyTriggersHeaders: string[] = ['Provocation', 'Difficulty'];
  tableFrenzyTriggersRows: string[][] = [
    ['Smell of blood when hungry', '3'],
    ['Sight of blood when hungry', '4'],
    ['Being harassed', '4'],
    ['Life-threatening situation', '4'],
    ['Malicious taunts', '4'],
    ['Physical provocation', '6'],
    ['Taste of blood when hungry', '6'],
    ['Loved one in danger', '7'],
    ['Outright public humiliation', '8'],
  ];

  tableRoetschreckHeaders: string[] = ['Provocation', 'Difficulty'];
  tableRoetschreckRows: string[][] = [
    ['Lighting a lamp', '3'],
    ['Sight of a torch', '5'],
    ['Bonfire', '6'],
    ['Obscured sunlight', '7'],
    ['Being burned', '7'],
    ['Direct sunlight', '8'],
    ['Trapped in burning building', '9'],
  ];
}
