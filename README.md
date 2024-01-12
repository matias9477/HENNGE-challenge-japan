# Email Audit

Email Audit is a system used to audit all emails sent from within an organization. In the event of security incidents (such as leakage of sensitive information via emails), this system will be used by the organization's auditing department to retrieve and verify the emails of the concerning parties through its admin console.

# Challenge Details

Suppose you have just joined a team responsible for developing an `Email Audit` system. Assume that this project is a real project and is being used in a production
environment on a trial basis (since the features are not yet complete).

As your first assignment, you are tasked with implementing a component called `RecipientsDisplay`, to intelligently show email recipients inside the `AuditTable` component. We have prepared a barebones `RecipientsDisplay` component in three different frameworks. Your task is to update the component in any one of the frameworks to add this functionality.

## `RecipientsDisplay` component requirements

Assume that an employee can send an email to many recipients. Due to the limited amount of space, we want to make sure the information is displayed well. Our design team has come up with the following specs:

- If all the recipient email addresses fit in the available space, we can simply display them delimited by a comma and space (e.g. `a, b`).
- When there is not enough space to display all recipients, we trim the text. However, to prevent showing clipped email addresses that are hard to read, we trim entire email addresses. If we cannot fit the entirety of a recipient email address, it shouldn't be shown at all.
- When at least one recipient is trimmed, we put a comma, space, and ellipsis after the last fitting recipient (e.g. `a, b, ...`). Furthermore, the rightmost end of the column should show a "badge" with the number of trimmed recipients (`+N`).
- If there is not enough space to show even the first recipient, the badge should show the number of trimmed recipients excluding the first recipient, and the recipient should be truncated with an ellipsis only. If there is only one recipient, there will be no badge, and the recipient should still be truncated by an ellipsis.
- This functionality should work on any screen size and when the screen is resized. For simplicity, this will only be tested in a recent version of a Chromium browser.
- Do not re-order the recipients.
- Do not add new/extra functionalities and features.

### Examples

**Trim recipients that do not fit in the column. Show `, ...` after the last fitting recipient and a badge with `+N` at the end of the column.**

![Email trim example 1](Email%20trim%20example%201.svg)

**If there is not enough space to show the ellipsis and the extra space, trim that recipient as well.**

Incorrect:

![Email trim example 2A](Email%20trim%20example%202A.svg)

Correct:

![Email trim example 2B](Email%20trim%20example%202B.svg)

**If there is not enough space to show the first recipient, the badge should show the number of trimmed recipients excluding the first recipient, and the recipient should be truncated with an ellipsis only. If there is only one recipient, there should be no badge.**

Two recipients:

![Email trim example 3A](Email%20trim%20example%203A.svg)

One recipient:

![Email trim example 3B](Email%20trim%20example%203B.svg)

## Measurements

![Badge measurements](Badge%20measurements.png)

- Font size: 16px
- Foreground color: #f0f0f0
- Background color: #666666
- Border radius: 3px
- Top padding: 2px
- Bottom padding: 2px
- Left padding: 5px
- Right padding: 5px

![Cell measurements](Cell%20measurements.png)

- Font size: 16px
- Foreground color: #333333
- Top padding: 5px
- Bottom padding: 5px
- Left padding: 10px
- Right padding: 10px


## Development

Install dependencies and then start in the development mode.

```bash
npm install
npm run dev
```

Navigate to the port that was displayed on the terminal. The app should be running after the development build is finished.

## Build

To generate production version:

```bash
npm run build
```

You can run the newly built app locally with `npm run preview`.

## Features

This project is in an early phase, so the features are not yet complete. At the moment, it will display mocked email data from `fake-data.ts` to simulate an API response. It also doesn't have any kind of pagination at the moment, but we plan to support it in the future, as well as allowing the user to set how many items to show per page.

Since checking date and time is crucial in an auditing process, table rows have alternating background colors between dates to make it easier to distinguish emails sent on different dates.

Our users are diverse and have many different device configurations, so we need to make sure the UI doesn't break when viewed at any screen size. However, since we haven't implemented a mobile version of the design yet, we understand that the information cannot be consumed well on very small screen sizes.
