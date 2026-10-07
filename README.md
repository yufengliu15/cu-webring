# cu-webring
A webring for Carleton Students by Carleton Students.

Heavily inspired by [Waterloo's SE Webring](https://github.com/simcard0000/se-webring) and [McGill's Webring](https://github.com/leofalvo/mcgillcswebring.org). 

[What's a webring?](#whats-a-webring) / [How do I join?](#how-do-i-join) / [How long will the webring be maintained for?](#how-long-will-the-webring-be-maintained-for)
## What's a webring?
A [webring](https://en.wikipedia.org/wiki/Webring) is a group of websites linked together in a circular structure, usually organized around a specific theme, and often educational or social. In our case, the webring is not circular, and much closer to a [hub and spoke](https://en.wikipedia.org/wiki/Spoke%E2%80%93hub_distribution_paradigm). This is because asking everyone to update their website when someone adds/removes theirs would be near impossible, and would discourage the use of the webring. 

The idea behind this webring is to bring exposure and traffic to your personal website, with the hopes of creating a more community-like experience during your time at Carleton. 

## How do I join?
To add your site, you MUST be a current student or alumni at [Carleton University](https://carleton.ca/).

1. Fork the repo
2. Create a new file `sites/<your-github-username>.json` (e.g. `sites/yufengliu15.json`). **Do not edit any other file.** It should look like this:
    ```json
    {
      "name": "Your Full Name",
      "year": 2024,
      "website": "https://your-site.com",
      "alias": "Your Alias"
    }
    ```
    - `name`: Full Name
    - `year`: Year Admitted to Carleton
    - `website`: Website URL (must be **your** personal website)
    - `alias`: **Optional**, delete the line if you don't need it. This is for if you don't like your url or wish to shorten it, ex: name.github.io -> name.io. Aliases **must** contain your name.

3. **Please mention the webring** somewhere on your website. Preferably, have it link back to the main site ([cu-webring.org](https://cu-webring.org)).
4. Create a [pull request](https://github.com/yufengliu15/cu-webring/pulls) and fill in the details. 

## How long will the webring be maintained for?
As long as the url is working ([cu-webring.org](https://cu-webring.org)), we (@yufengliu15 & @rapha-pro) will maintain the webring. So do not hesitate to open a pull request!

Authors: Yufeng Liu (@yufengliu15) and Raphaël Onana (@rapha-pro)
