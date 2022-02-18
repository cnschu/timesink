import { V20DaCharacter } from '..';

describe('featureV20Types', () => {
  it('should work', () => {
    const entity: V20DaCharacter = {
      clan: 'Ventrue',
      name: 'Benjamin',
      surname: 'Vogt',
      imageSrc: undefined,
    };
    expect(entity.name).toEqual('Benjamin');
  });
});
