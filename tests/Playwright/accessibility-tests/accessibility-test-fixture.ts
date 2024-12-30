import { test as base, expect } from "../page-object-model/apply-for-landing-test-fixture";
import AxeBuilder from '@axe-core/playwright';

interface A11yTestFixture {
  expectNoAccessibilityViolations: () => Promise<void>;
}

export const test = base.extend<A11yTestFixture>({
  expectNoAccessibilityViolations: async ({ page }, use) => {
    const accessibilityScanner = new AxeBuilder({ page })
      .withTags(['best-practice', 'wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']);

    const doScan: () => Promise<void> = async () => {
      const accessibilityScanResults = await accessibilityScanner.analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    };

    await use(doScan);
  }
});
