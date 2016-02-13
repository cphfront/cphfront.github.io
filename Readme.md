# cphfront.com

Community website for Copenhagen Frontenders.

## Getting started

Clone the repositiory and install the needed dependencies from Rubygems and npm.

```bash
bundle install && npm install --dev
```

Install gulp globally on your machine (unless you automagically include ``node_modules`` dependencies in your ``$PATH``).

```bash
npm install -g gulp
```

To start building while watching for changes in development just run gulp.

```bash
gulp
```

If you want to run a production version of the site then run ``gulp build``. If you need to deploy then run ``gulp deploy``.
This part requires a valid ``.env`` with credentials to push to S3 and update the CloudFront distribution (only organizers have this).
