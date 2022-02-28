import { V20DaCharacter } from '..';

describe('featureV20Types', () => {
  it('should work', () => {
    const entity: V20DaCharacter = {
      name: 'Benjamin',
      surname: 'Vogt',
      clan: 'Ventrue',
      position: undefined,
      imageSrc: undefined,
      apparentAge: 25,
    };
    expect(entity.name).toEqual('Benjamin');
  });
});
