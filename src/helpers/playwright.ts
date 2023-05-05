import playwright from 'playwright'
import { Page } from '@playwright/test'
import { MUNDO, PAIS, USER_AGENT } from '../constants'
import { FeedInterface } from '../models/feed.interface'

export const scrapElMundo = async () => {
  try {
    const browser = await playwright.chromium.launch({ headless: true })
    const context = await browser.newContext(USER_AGENT)
    const page = await context.newPage()
    await page.goto(MUNDO.URL)

    let mundoNews = []

    await page.waitForSelector(MUNDO.ANCHOR_CLASS)
    const links = await page.$$(MUNDO.ANCHOR_CLASS)

    for (const link of links) {
      const href = await link.getAttribute('href')
      const h2 = await link.$(MUNDO.H2_CLASS)
      if (h2) {
        const text = await h2!.innerText()
        mundoNews.push({ newspaper: 'El Mundo', href, text })
      } else continue
    }

    await browser.close()

    return mundoNews
  } catch (err) {
    if (err instanceof playwright.errors.TimeoutError) return 'Timeout'
    return err
  }
}

export const scrapElPais = async () => {
  try {
    const browser = await playwright.chromium.launch({ headless: true })
    const context = await browser.newContext(USER_AGENT)
    const page: Page = await context.newPage()
    await page.goto(PAIS.URL)

    const elements: FeedInterface[] = await page.evaluate(() => {
      let elements = document.querySelectorAll('h2 > a')
      return Array.from(elements).map(element => {
        return {
          newspaper: 'El País',
          href: element.getAttribute('href') ?? '',
          text: element.textContent ?? ''
        }
      })
    })

    await browser.close()

    return elements
  } catch (err) {
    if (err instanceof playwright.errors.TimeoutError) return 'Timeout'
    return err
  }
}
