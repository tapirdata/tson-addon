/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { expect } from 'chai';

import setups from './fixtures/setups';
import pairs from './fixtures/typeid-pairs';
import wsonFactory from './wsonFactory';

for (const setup of setups) {
  describe(setup.name, () => {
    const wson = wsonFactory(setup.options);
    describe('typeid', () => {
      for (const pair of pairs) {
        const [x, typeid] = pair;
        it(`should get typeid of ${JSON.stringify(x)} as '${typeid}' `, () => {
          expect(wson.getTypeid(x)).to.be.equal(typeid);
        });
      }
    });
  });
}
