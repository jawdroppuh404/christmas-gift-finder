# Christmas Gift Picker

A guided questionnaire that turns details about a recipient into focused gift ideas, then opens current Amazon searches using the `jawdroppuh-20` Associates tracking ID.

## How recommendations work

- The questionnaire lives in `src/data/questions.js`.
- The curated gift-idea library lives in `src/data/gifts.js`.
- `src/utils/recommendations.js` scores each idea against the recipient's budget, age, relationship, personality, hobbies, interests, lifestyle, preferences, and restrictions.
- Results are diversified so one category cannot take over the entire shortlist.

The catalog intentionally recommends durable gift concepts rather than pretending that static product names and prices are live Amazon inventory.

## Amazon links

Each catalog record supports two linking modes:

1. `affiliateUrl`: an optional, product-specific URL generated and verified with Amazon SiteStripe.
2. `searchTerm`: the fallback used to build a durable Amazon search URL with the tracking ID.

Example catalog record:

```js
{
  id: 'portable-charger',
  name: 'Compact portable charger',
  searchTerm: 'compact portable phone charger power bank',
  affiliateUrl: 'https://amzn.to/example', // optional verified SiteStripe link
  // ...matching metadata
}
```

Do not add copied or scraped Amazon product images. Keep the category artwork unless an approved Amazon image/embed is available through Associates tools.

## Local development

```sh
npm install
npm start
```

## Verification

```sh
npm test -- --watchAll=false
npm run build
```

The tests validate the catalog structure, recommendation behavior, restrictions, affiliate-link construction, countdown rollover, and basic questionnaire navigation.
