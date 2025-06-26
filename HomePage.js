import { expect } from '@playwright/test';

export class DiaryPage {
  constructor(page) {
    this.page = page;
    this.rows = page.locator('table tbody tr');
    this.rows = page.locator('#dreamsDiary tbody tr')
  }

  async validateRows() {
    await expect(this.rows).toHaveCount(10); // Total 10 entries

    for (let i = 0; i < 10; i++) {
      const row = this.rows.nth(i);
      const cols = row.locator('td');

      const name = await cols.nth(0).innerText();
      const daysAgo = await cols.nth(1).innerText();
      const type = await cols.nth(2).innerText();

      //  Check all 3 columns have values
      expect(name.trim().length).toBeGreaterThan(0);
      expect(daysAgo.trim().length).toBeGreaterThan(0);
      expect(type.trim().length).toBeGreaterThan(0);

      // Check only “Good” or “Bad” values
      expect(['Good', 'Bad']).toContain(type.trim());
    }
  }
  async getRecurringDreams() {
    const countMap = {};
    const count = await this.rows.count();

    for (let i = 0; i < count; i++) {
      const dreamName = await this.rows.nth(i).locator('td').nth(0).innerText();
      countMap[dreamName] = (countMap[dreamName] || 0) + 1;
    }

    const recurring = Object.entries(countMap)
      .filter(([_, freq]) => freq > 1)
      .map(([name]) => name);

    return recurring; // ['Flying over mountains', 'Lost in maze']
  }
}