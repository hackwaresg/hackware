[![](img/cover.jpg)](https://www.facebook.com/groups/hackware)

# Hackware

> A monthly meetup for electronics, hardware, wireless communication, robotics and iot lovers. Checkout our casual meetups on [Facebook](https://www.facebook.com/groups/hackware) and [Meetup.com](http://meetup.com/hackware).

## Initial setup

1. Install [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io). On a Mac with brew: `brew install node pnpm`
1. Install packages `pnpm i`

## Running the slides

- Open `index.html` in your browser, or run `pnpm start` for a live-reloading dev server
- Past meetups are found in [tag releases](https://github.com/sayanee/hackware/releases)

## Updating reveal.js

The slides use [reveal.js](https://revealjs.com). The files it needs are committed in `vendor/reveal` so the site can be served as-is from GitHub Pages.

1. Bump the version: `pnpm up reveal.js --latest`
1. Copy the files into `vendor/reveal`: `pnpm vendor`
1. Check the slides and commit

## Edit slides

1. Search for `EDIT` in file `index.html`
1. If the meetup has ended, then tag the release with `{HACKWARE_VERION}`
    ```sh
    # git tag -a {HACKWARE_VERSION} -m "Hackware {HACKWARE_VERSION}" # template
    git tag -a v1.4 -m "Hackware v1.4" # example
    git push --tags
    ```

## Organizing

- 2 months: **Book a venue**
  - For ~50 people
  - With at least has a projector to display slides
  - (Optional) Sponsor food and drinks
- 1 month: **Look for speakers**
  - speaking duration: 5 / 10 / 15 / 20 minutes
  - look for speakers across various levels and topics
  - keep a lookout for new speakers
  - new speakers can be given 5 minutes for the first time and subsequently longer
- 1 month: **Meetup agenda**
  - create event pages in [meetup.com](https://www.meetup.com/Hackware/) and [facebook](https://www.facebook.com/groups/hackware/)
  - agenda includes the time and speaker names
  - add all speakers, organisers and venue hosts to the event page for editing rights
- 2 weeks:
  - put a comment to remind all potential attendees in the event pages
  - remind the venue organisers
- 1 week: **Meetup roles**
  - Emcee - amend the slides
  - Social Media - remind attendees on the meetup date and post photos
  - Time keeper - run the [timer](https://sayan.ee/timer) for the speakers
  - Door keeper - guide guests to the venue on the meetup day
- on the day:
  - emcees can follow the [slides](http://bit.ly/hackware) for the flow of the meetup:
  - give a speaker slot for the venue sponsor
  - no questions for the speaker unless it is within their time slot so that the entire meetup ends early and attendees can hangout longer
  - run a countdown timer for each speaker
  - encourage post-meetup hangout and sharing after all the talks are done

## Role of organizers

- Online: 1 hour mostly online every month
    - find speakers
    - find venue
- Offline: Attend Hackware every month
    - venue coordinator: confirm venue and add events to meetup / facebook
    - time keeper
    - social media updater
    - emcee
    - door keeper
- Teamwork
    - We cover each other when one is busy or not able to attend Hackware
- Fun times
    - To learn about hardware, make friends, get to know the speakers, increase community awareness and knowledge!
